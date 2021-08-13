# Shooty Shooty
![Shooty Shooty logo](https://lamp.ms.wits.ac.za/~cgv5/shooty)

## What is Shooty Shooty?
Shooty Shooty is an online first person action shooter game written in JavaScript using a Node.js runtime environment and THREE.JS library. The game consists of three maps and the game mode is a 10 minute free for all death match. The primary objective is to accumate the most kills in the alloted time. 

## Controls:
- Move: WASD
- Jump: Space
- Look: Mouse
- Shoot: Left-click or Right-click
- Zoom: E
- Pause: Escape Key

## Setup Instructions:
### Ubuntu:

1. `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
2. `sudo apt-get install -y nodejs`
3. Open a terminal window in the MPFiles folder of the project
4. `npm install`
5. `npm install -g nodemon`
6. `nodemon serverMap1.js` (replace serverMap1 with serverMap2, or serverMap3 for those maps)
7. Navigate to http://localhost:3000/?nickname=NICKNAME where nickname is the chosen player name or use the welcome.html page in the UI folder to access the main menu. (use port 3001 for map 2 and 3002 for map 3)

### Windows:

1. Download and install `https://nodejs.org/dist/v12.16.3/node-v12.16.3-x64.msi`
2. Open a command prompt or powershell window in the MPFiles folder of the project
3. `npm install`
4. `npm install -g nodemon`
5. `nodemon serverMap1.js` (replace serverMap1 with serverMap2, or serverMap3 for those maps)
6. Navigate to http://localhost:3000/?nickname=NICKNAME where nickname is the chosen player name or use the welcome.html page in the UI folder to access the main menu. (use port 3001 for map 2 and 3002 for map 3)

### Alternative Server Configuration: 

If desired PM2 can be used to run multiple server instances simultaneously. This can be achived by running the following NPM commands from the project level directory. 
1. `npm install`
2. `npm install -g pm2`
3. `pm2 start serverMap1.js` 
4. `pm2 start serverMap2.js` 
5. `pm2 start serverMap3.js` 

This will allow switching between maps without having to stop and start each Node server instance. 

## Project Details:
This project was completed by the Cool Beans group for COMS3006A - Computer Graphics & Visualization - 2020
- Michael Gomes
- Anrich Kok
- Tristan Le Forestier
- Tristen Paul
