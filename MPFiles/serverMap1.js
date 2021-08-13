'use strict';

//define relations and dependencies needed for client server comms
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const yargs = require('yargs').argv;

/** Class representing a game object */
class GameObject{
    /**
     * create a game object
     * @param obj
     */
    constructor(obj={}){
        //every object gets random id to be identified with
        this.id = Math.floor(Math.random()*1000000000);
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z;
    }

    /**
     * checks if item is not in map area
     * @returns {boolean}
     */
    outBounds(){
        return (this.x <= -300) ||
            (this.x >= 300) ||
            (this.z <= -300) ||
            (this.z >= 300);
    }

    /**
     * checks if object intersects another
     * @param obj
     * @returns {boolean|boolean}
     */
    intersect(obj){
        return (this.x <= obj.x + 2.5) &&
            (this.x >= obj.x - 2.5) &&
            (this.y <= obj.y) &&
            (this.y >= obj.y - 8) &&
            (this.z <= obj.z + 2.5) &&
            (this.z >= obj.z - 2.5);      
    }

    /**
     * returns JSON string with game objects permission
     * @returns {{x, y, z, id: number}}
     */
    toJSON(){
        return {id: this.id, x: this.x, y: this.y, z: this.z};
    }
}

/** Class representing a player */
class Player extends GameObject{
    /**
     * create a player
     * @param obj
     */
    constructor(obj={}){
        super(obj);
        this.socketId = obj.socketId;
        this.nickname = obj.nickname;
        this.lookAt = obj.lookAt;
        this.bullets = {};
        this.kills = 0;
        this.deaths = 0;
        this.health = 100;   
        this.animation = obj.animation;
        this.time = obj.time;  
        this.takeDamage = true;
    }

    /**
     * processes movement received from client
     * @param movement
     */
    getMovement(movement){
        this.x = movement.x;
        this.y = movement.y;
        this.z = movement.z;
        this.lookAt = movement.lookAt;
        this.animation = movement.animation;
        this.time = movement.time;
        if(this.outBounds() && this.takeDamage === true){
            this.deaths += 1;
            io.to(this.socketId).emit('dead',players[this.id]);
            this.takeDamage = false;
            this.x = 0;
            this.z = 0;
        }
    }

    /**
     * updates player movements
     * @param details
     */
    update(details){
        this.x = details.x;
        this.y = details.y;
        this.z = details.z;
        this.lookAt = details.lookAt;
        this.animation = details.animation;
        this.time = details.time;
        this.takeDamage = true;
    }

    /**
     * adds details to bullet when fired
     * @param bulletDetails
     */
    shoot(bulletDetails){
        const bullet = new Bullet({
            x: bulletDetails.x,
            y: bulletDetails.y,
            z: bulletDetails.z,
            bulLookAt: bulletDetails.lookAt,
            player: this,
            animation: bulletDetails.animation
        });
        this.bullets[bullet.id] = bullet;
        bullets[bullet.id] = bullet;       
    }

    /**
     * deals damage to player when shot
     */
    damage(){
        //reduce health and emit change
        if(this.takeDamage == true){
            this.health = this.health - 10;
            io.to(this.socketId).emit('damage', this);
            if(this.health === 0){
                this.deaths = this.deaths + 1;
                this.remove();
            }
        }
    }

    /**
     * removes player from game
     */
    remove(){
        io.to(this.socketId).emit('dead',players[this.id]);
    }

    /**
     * send JSON array with player details
     * @returns {{x, y, z, id: number} & {socketId, kills: number, nickname, health: number, lookAt, time, deaths: number, bullets: {}, animation}}
     * @override
     */
    toJSON(){
        return Object.assign(super.toJSON(), {health: this.health, socketId: this.socketId, nickname: this.nickname, lookAt: this.lookAt,
            bullets: this.bullets, kills: this.kills, deaths: this.deaths,animation: this.animation,time: this.time});
    }
}

/** Class representing a bullet */
class Bullet extends GameObject{
    /**
     * create a bullet
     * @param obj
     */
    constructor(obj={}){
        super(obj);
        this.bulLookAt = obj.bulLookAt;
        this.update = 2500;
        this.player = obj.player;
    }

    /**
     * removes bullet from game
     */
    remove(){
        delete this.player.bullets[this.id];
        delete bullets[this.id];
    }

    /**
     * send JSON array with bullet details
     * @returns {{x, y, z, id: number} & {socketId, kills: number, nickname, health: number, lookAt, time, deaths: number, bullets: {}, animation}}
     * @override
     */
    toJSON(){
        return Object.assign(super.toJSON(), {update: this.update, lookAt: this.bulLookAt, player: this.player.id});
    }
}

/**
 * player array
 * @type {{}}
 */
let players = {};

/**
 * bullet array
 * @type {{}}
 */
let bullets = {};

/**
 * game timer
 */
let gameTimer;

/**
 * removes bullet
 * @param bulDetails
 */
function removeSpecBullet(bulDetails){
    if(typeof bulDetails.id !== "undefined" ) {
        if (typeof players[bulDetails.player] !== "undefined") {
            delete players[bulDetails.player].bullets[bulDetails.id];
            delete bullets[bulDetails.id];
        }   
    }
}

/**
 * when a client connects to server
 */
io.on('connection', function(socket) {
    console.log(`player connected`);
    let player = null;
    //when game start is sent from client
    socket.on('game-start', (config) => {
        console.log("start")
        player = new Player({
            socketId: socket.id,
            nickname: config.nickname,
            x: config.x,
            y: config.y,
            z: config.z,
            lookAt: config.lookAt,
            animation: config.animation,
            time: config.time
        });
        //set match length
        if(Object.entries(players).length == 0){
            gameTimer = 1000*60*10;
        }
        players[player.id] = player;
        console.log(`New player ${player.nickname} with id ${player.socketId} joined`);
    });

    /**
     * when client emits movement
     */
    socket.on('movement', function(movement) {
        if(!player || player.health===0){return;}
        player.getMovement(movement);
    });

    /**
     * when client emits update
     */
    socket.on('update', function(details) {
        player.update(details);
    });

    /**
     * when client shoots bullet
     */
    socket.on('shoot', function(bulletDetails){
        if(!player || player.health===0){return;}
        player.shoot(bulletDetails);
    });

    /**
     * when client requests bullet removal
     */
    socket.on('removeSpecBullet', function(bulletDetails){
        removeSpecBullet(bulletDetails);
    });

    /**
     * when client disconnects
     */
    socket.on('disconnect', () => {
        if(!player){return;}
        console.log(`Existing player ${player.nickname} with id ${player.socketId} disconnected`);
        delete players[player.id];
        player = null;
    });
});

//emit states of players,bullets and time left to all clients every ms
setInterval(() => {
    Object.values(bullets).forEach((bullet) =>{   
        if(bullet.update > 0){
            //update position of bullet
            bullet.x = bullet.x + bullet.bulLookAt.x * 0.05;
            bullet.y = bullet.y + bullet.bulLookAt.y * 0.05;
            bullet.z = bullet.z + bullet.bulLookAt.z * 0.05;
            Object.values(players).forEach((player) => {
                if(bullet.intersect(player)){ //bullet hits player
                    if(player !== bullet.player){
                        console.log(`${bullet.player.nickname} hit ${player.nickname} `);
                        player.damage();
                        bullet.remove();
                        if (player.health === 0) {
                            let filterResult = Object.values(players).filter(player => player.socketId === bullet.player.socketId);
                            filterResult[0].kills++;
                            //emit to change kills on ingame menu of player
                            io.to(bullet.player.socketId).emit('successfulKill',players[bullet.player.id]);
                            console.log(`${bullet.player.nickname} killed ${player.nickname}`);
                            player.takeDamage = false;
                            player.health = 100;
                        }
                    }
                } 
             });
             //decrease time remaining
            bullet.update = bullet.update - 1;  
        } 
        else{
            bullet.remove();
        }               
    });
    if (gameTimer > 0) {
        gameTimer = gameTimer - 1;
        //emit game state
        io.sockets.emit('state',players,bullets,gameTimer);
    } else if(gameTimer === 0){
        //if game is done stop emitting updates
        io.sockets.emit('end',players);

        Object.values(players).forEach((player) => {
            delete players[player.id];
        });
            
        console.log("resetting server");
        gameTimer = -1;   
    }
}, 1);

//express middleware directory binding
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/static/3dMap1.html'));
});

//set port number for map
const port = parseInt(yargs.port) || 3000;
server.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});