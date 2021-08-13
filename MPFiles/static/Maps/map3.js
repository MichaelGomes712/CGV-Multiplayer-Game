/**
 * SkyBox global variable
 * @type {THREE.Mesh}
 */
var skybox;

/**
 * loads the desired Map when called from 3dMap3.html
 */
function loadMap3(){

    //set sky
    setSky();

    //add walls and gate to scene
    var world = setWorldBoundaries();
    world.then(worldObj => {
        scene.add(worldObj);
    });

    //adds main building to scene
    var building = setBuilding();
    building.then(buildingObj => {
        scene.add(buildingObj);
    });

    //adds roads to scene
    var roads = setRoads();
    roads.then(roadsObj => {
        scene.add(roadsObj);
    });

    //adds parking area and vehicles to scene
    var parking = setParking();
    parking.then(parkingObj => {
        scene.add(parkingObj);
    });

    //adds outdoor decor to scene
    var decor = setDecorations();
    decor.then(decorObj => {
        scene.add(decorObj);
    });

    //adds entry guard post building to scene
    var guardHouse = setGuardHouse();
    guardHouse.then(guardHouseObj => {
        scene.add(guardHouseObj);
    });

    //adds directional light (sun light) to scene
    directionalLight(-150, 100, 100);
}

/**
 * adds directional light to scene
 * @param x
 * @param y
 * @param z
 */
function directionalLight(x,y,z) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var light = new THREE.DirectionalLight(0xffffff, 0.5); //colour, intensity (white, half intensity)
    light.position.set(x,y,z);
    light.castShadow = true;
    scene.add(light);
    // Set up shadow properties for the light
    light.shadow.mapSize.width = window.innerWidth;
    light.shadow.mapSize.height = window.innerHeight;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 500;

    const d = 30;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;
}

/**
 * adds point light to scene
 * @param x
 * @param y
 * @param z
 */
function pointLight(x, y, z) {
    //Create a PointLight and turn on shadows for the light
    var light = new THREE.PointLight( 0xffffff, 5, 100 ); //color, intensity, distance
    light.position.set(x,y,z); //x,y,z co-ordinates of light's position
    light.castShadow = true;
    scene.add(light);
    //Set up shadow properties for the light
    light.shadow.mapSize.width = window.innerWidth;
    light.shadow.mapSize.height = window.innerHeight;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}

/**
 * loads different walls of main building
 * @returns {Promise<>}
 */
function setBuilding() {
    return new Promise (function() {
        var wallBack = setBuildingBackWall();
        wallBack.then(wallBackObj => {
            scene.add(wallBackObj);
        });
        var wallFront = setBuildingFrontWall();
        wallFront.then(wallFrontObj => {
            scene.add(wallFrontObj);
        });
        var wallSideLeft = setBuildingLeftSideWall();
        wallSideLeft.then(wallSideLeftObj => {
            scene.add(wallSideLeftObj);
        });
        var wallSideRight = setBuildingRightSideWall();
        wallSideRight.then(wallSideRightObj => {
            scene.add(wallSideRightObj);
        });
        var interior = setBuildingInterior();
        interior.then(interiorObj => {
            scene.add(interiorObj);
        });
        var roof = setBuildingRoof();
        roof.then(roofObj => {
            scene.add(roofObj);
        });
        mainBuilding.scale.set(3, 3, 3);
        mainBuilding.position.set(-75, -15, 0);
        scene.add(mainBuilding);
    });

}

/**
 * loads back wall and doorways of main building
 * @returns {Promise<>}
 */
function setBuildingBackWall() {
    return new Promise (function(){
        var mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,-50);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,-35);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallDoorwayRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallDoorwayRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,-20);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,-5);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,10);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallDoorwayRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallDoorwayRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,25);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,40);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,5,55);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,55);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,40);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,25);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,10);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,-5);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,-20);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,-35);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(100,17,-50);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

    });

}

/**
 * loads front wall and doorways of main building
 * @returns {Promise<>}
 */
function setBuildingFrontWall() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowShutters.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowShutters.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(55,5,-50);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        for (let index = 0; index < 2; index ++) {
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(5,12,15);
                    mesh.position.set(55,5, -(35 -15*index) );
                    mainBuilding.add(mesh);
                    objects.push(mesh);
                });
            });
        }

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallDoorwaySquareWide.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallDoorwaySquareWide.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(55,5,-5);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallDoorwaySquareWide.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallDoorwaySquareWide.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,-15);
                mesh.position.set(55,5,10);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        for (let index = 0; index < 2; index ++) {
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(5,12,15);
                    mesh.position.set(55,5, (25 +15*index) );
                    mainBuilding.add(mesh);
                    objects.push(mesh);
                });
            });
        }

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowShutters.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowShutters.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(55,5,55);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        for (let index = 0; index < 8; index++) {
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/wallWindowRound.mtl", function (materials) {
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/wallWindowRound.obj", function (mesh) {
                    mesh.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(5, 12, 15);
                    mesh.position.set(55, 17, 55 - 15 * index);
                    mainBuilding.add(mesh);
                    objects.push(mesh);
                });
            });
        }
    });

}

/**
 * loads furniture of main building
 * @returns {Promise<>}
 */
function setBuildingInterior() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWood.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWood.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,3.75*12,8*15);
                mesh.rotation.set(0,0,Math.PI/2);
                mesh.position.set(102.5,3.3,3);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWood.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWood.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,3.75*12,8*15);
                mesh.rotation.set(0,0,Math.PI/2);
                mesh.position.set(102.5,27,3);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWood.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWood.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,3.2*12,8*15);
                mesh.rotation.set(0,0,Math.PI/2);
                mesh.position.set(96,15.5,3);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWood.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWood.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,0.85*12,6.5*15);
                mesh.rotation.set(0,0,Math.PI/2);
                mesh.position.set(101.5,15.5,3);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/stairs.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/stairs.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(15,11,8);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(102,3,-30);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/stairsCorner.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/stairsCorner.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,11,-15);
                mesh.rotation.set(0,Math.PI,0);
                mesh.position.set(92,3,41);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/desk.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/desk.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(25,25,25);
                mesh.rotation.set(0,3*Math.PI/2,0);
                mesh.position.set(215,1.2,18);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/chair.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/chair.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(25,25,25);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(212,1.2,3);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/computerScreen.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/computerScreen.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(10,10,10);
                mesh.rotation.set(0,3*Math.PI/2,0);
                mesh.position.set(209,10.7,7);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/computerKeyboard.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/computerKeyboard.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(10,10,10);
                mesh.rotation.set(0,3*Math.PI/2,0);
                mesh.position.set(213,10.8,7);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/computerMouse.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/computerMouse.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(10,10,10);
                mesh.rotation.set(0,3*Math.PI/2,0);
                mesh.position.set(213,10.8,2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/rugRounded.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/rugRounded.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,50,50);
                mesh.rotation.set(0,3*Math.PI/2,0);
                mesh.position.set(160,3,50);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

    });
}

/**
 * loads left side wall of main building
 * @returns {Promise<>}
 */
function setBuildingLeftSideWall() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(95,5,-55);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(80,5,-55);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(65,5,-55);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        for (let index = 0; index < 3; index++) {
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(5,12,15);
                    mesh.position.set(65 + 15*index,17,-55);
                    mesh.rotation.set(0,Math.PI/2, 0);
                    mainBuilding.add(mesh);
                    objects.push(mesh);
                });
            });
        }
    });
}

/**
 * loads right side wall of main building
 * @returns {Promise<>}
 */
function setBuildingRightSideWall() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(95,5,65);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(80,5,65);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(5,12,15);
                mesh.position.set(65,5,65);
                mesh.rotation.set(0,Math.PI/2, 0);
                mainBuilding.add(mesh);
                objects.push(mesh);
            });
        });

        for (let index = 0; index < 3; index++) {
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/wallWindowRound.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/wallWindowRound.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(5,12,15);
                    mesh.position.set(65 + 15*index,17,65);
                    mesh.rotation.set(0,Math.PI/2, 0);
                    mainBuilding.add(mesh);
                    objects.push(mesh);
                });
            });
        }
    });
}

/**
 * loads roof of main building
 * @returns {Promise<>}
 */
function setBuildingRoof() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roofFlat.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roofFlat.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(140,40,375);
                mesh.position.set(163,74,10);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
    });
}

/**
 * loads outdoor decor
 * @returns {Promise<>}
 */
function setDecorations() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/fountainRound.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/fountainRound.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,20,30);
                mesh.position.set(-10,2,20);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/fountainRoundDetail.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/fountainRoundDetail.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(15,20,15);
                mesh.position.set(-10,4,20);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        for(let index = 0;index < 2;index++){
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/stallRed.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/stallRed.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(20,20,20);
                    mesh.rotation.set(0,0,0);
                    mesh.position.set(130+60*index,2,-250);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });

            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/stallBench.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/stallBench.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(20,20,20);
                    mesh.rotation.set(0,0,0);
                    mesh.position.set(140+60*index,2,-250);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });

            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/stallBench.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/stallBench.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(20,20,20);
                    mesh.rotation.set(0,0,0);
                    mesh.position.set(120+60*index,2,-250);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });

            for(let index = 0;index < 1;index++) {
                mtlloader = new THREE.MTLLoader(loadingManager);
                mtlloader.load("static/Models/stallRed.mtl", function (materials) {
                    materials.preload();
                    const objloader = new THREE.OBJLoader(loadingManager);
                    objloader.setMaterials(materials);
                    objloader.load("static/Models/stallRed.obj", function (mesh) {
                        mesh.traverse(function (node) {
                            if (node instanceof THREE.Mesh) {
                                node.castShadow = true;
                                node.receiveShadow = true;
                            }
                        });
                        mesh.scale.set(20, 20, 20);
                        mesh.rotation.set(0, 0, 0);
                        mesh.position.set(160 + 60 * index, 2, -210);
                        scene.add(mesh);
                        objects.push(mesh);
                    });
                });

                mtlloader = new THREE.MTLLoader(loadingManager);
                mtlloader.load("static/Models/stallBench.mtl", function (materials) {
                    materials.preload();
                    const objloader = new THREE.OBJLoader(loadingManager);
                    objloader.setMaterials(materials);
                    objloader.load("static/Models/stallBench.obj", function (mesh) {
                        mesh.traverse(function (node) {
                            if (node instanceof THREE.Mesh) {
                                node.castShadow = true;
                                node.receiveShadow = true;
                            }
                        });
                        mesh.scale.set(20, 20, 20);
                        mesh.rotation.set(0, 0, 0);
                        mesh.position.set(170 + 60 * index, 2, -210);
                        scene.add(mesh);
                        objects.push(mesh);
                    });
                });

                mtlloader = new THREE.MTLLoader(loadingManager);
                mtlloader.load("static/Models/stallBench.mtl", function (materials) {
                    materials.preload();
                    const objloader = new THREE.OBJLoader(loadingManager);
                    objloader.setMaterials(materials);
                    objloader.load("static/Models/stallBench.obj", function (mesh) {
                        mesh.traverse(function (node) {
                            if (node instanceof THREE.Mesh) {
                                node.castShadow = true;
                                node.receiveShadow = true;
                            }
                        });
                        mesh.scale.set(20, 20, 20);
                        mesh.rotation.set(0, 0, 0);
                        mesh.position.set(150 + 60 * index, 2, -210);
                        scene.add(mesh);
                        objects.push(mesh);
                    });
                });
            }
        }

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/pine.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/pine.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,30,30);
                mesh.rotation.set(0,0,0);
                mesh.position.set(220,2,-220);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,30,30);
                mesh.rotation.set(0,0,0);
                mesh.position.set(180,2,220);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,30,30);
                mesh.rotation.set(0,0,0);
                mesh.position.set(140,2,240);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,30,30);
                mesh.rotation.set(0,0,0);
                mesh.position.set(180,2,280);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(20,20,20);
                mesh.rotation.set(0,0,0);
                mesh.position.set(0,2,270);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(25,25,25);
                mesh.rotation.set(0,0,0);
                mesh.position.set(-73,2,230);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            var objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(35,35,35);
                mesh.rotation.set(0,0,0);
                mesh.position.set(-120,2,250);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(10,10,10);
                mesh.rotation.set(0,0,0);
                mesh.position.set(-165,2,285);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/tree.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/tree.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,30,30);
                mesh.rotation.set(0,0,0);
                mesh.position.set(-180,2,240);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/rockSmall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/rockSmall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(20,10,20);
                mesh.position.set(-80,2,270);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/rockSmall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/rockSmall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(20,10,20);
                mesh.position.set(-100,2,230);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/lantern.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/lantern.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(20,40,20);
                mesh.position.set(-80,2,160);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
        //light eminating from lantern
        pointLight(-80, 60, 158);

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/lantern.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/lantern.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(20,40,20);
                mesh.position.set(-80,2,-140);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
        //light eminating from lantern
        pointLight(-80, 60, -138);
    });
}

/**
 * adds fog to scene
 */
function setFog() {
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
}

/**
 * loads guardhouse
 * @returns {Promise<>}
 */
function setGuardHouse() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wall.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wall.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(40,40,40);
                mesh.position.set(-190,0,-230);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(40,40,40);
                mesh.rotation.set(0,Math.PI,0);
                mesh.position.set(-191,0,-229);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(40,40,40);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-190,0,-229);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(40,40,40);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-190,0,-267);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/door.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/door.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(30,25,30);
                mesh.position.set(-184,0,-215);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roofPoint.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roofPoint.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(40,40,40);
                mesh.position.set(-190,40,-230);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
    });

}

/**
 * loads parking and car models
 * @returns {Promise<>}
 */
function setParking() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(0,2,-142.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-55,2,-142.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-110,2,-142.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/taxi.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/taxi.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-13,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/hatchbackSports.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/hatchbackSports.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-37,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/suv.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/suv.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-68,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/sedan.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/sedan.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-91,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/delivery.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/delivery.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-121,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/truck.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/truck.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-150,2,-110);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-0,2,160.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-55,2,160.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadPitGarage.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,8,50);
                mesh.rotation.set(0,-Math.PI/2,0);
                mesh.position.set(-110,2,160.2);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/raceFuture.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/raceFuture.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-13,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/sedanSports.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/sedanSports.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-37,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/suvLuxury.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/suvLuxury.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-65,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/van.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/van.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-95,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/sedan.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/sedan.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-123,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/deliveryFlat.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/deliveryFlat.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(-17,12,17);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-145,2,130);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
    });

}

/**
 * loads roads around parking area
 * @returns {Promise<>}
 */
function setRoads() {
    return new Promise (function(){
        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadCornerLarge.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadCornerLarge.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,4,25);
                mesh.rotation.set(0,0,0);
                mesh.position.set(85,2,150);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader.load("static/Models/roadCornerLarge.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadCornerLarge.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,4,-25);
                mesh.rotation.set(0,0,0);
                mesh.position.set(85,2,-135);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadStraightLong.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadStraightLong.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,4,143);
                mesh.rotation.set(0,0,0);
                mesh.position.set(85,2,-136);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadStraightLong.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadStraightLong.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(25,4,143);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-300,2,-185);
                scene.add(mesh);
                objects.push(mesh);
            });
        });

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/roadStraightLong.mtl",function(materials){
            materials.preload();
            const objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/roadStraightLong.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(25,4,143);
                mesh.rotation.set(0,Math.PI/2,0);
                mesh.position.set(-300,2,175);
                scene.add(mesh);
                objects.push(mesh);
            });
        });
    });
}

/**
 * loads skybox textures
 */
function setSky() {
    let materialArray = [];

    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_ft.jpg") }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_bk.jpg") }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_up.jpg") }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_dn.jpg")}));
    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_rt.jpg") }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_lf.jpg") }));
    for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;

    let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
    skybox = new THREE.Mesh( skyboxGeo, materialArray );
    scene.add( skybox );
}

/**
 * loads walls and gate around map
 * @returns {Promise<>}
 */
function setWorldBoundaries() {
    return new Promise (function(){

        mtlloader = new THREE.MTLLoader(loadingManager);
        mtlloader.load("static/Models/Plate_Grass_01.mtl",function(materials){
            materials.preload();
            var objloader = new THREE.OBJLoader(loadingManager);
            objloader.setMaterials(materials);
            objloader.load("static/Models/Plate_Grass_01.obj",function(mesh){
                mesh.traverse(function(node){
                    if(node instanceof THREE.Mesh){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(200,5,200);
                mesh.position.set(-300,0.4,300);
                scene.add(mesh);
            });
        });

        //outside bordering fence
        for(let index = 0;index < 40;index++){
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/ironFence.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/ironFence.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(30,100,5);
                    mesh.rotation.set(0,Math.PI/2,0);
                    mesh.position.set(-300,0.4,300-index*15);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });
        }

        for(let index = 0;index < 40;index++){
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/brickWall.mtl",function(materials){
                materials.preload();
                const objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/brickWall.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(30,100,5);
                    mesh.position.set(-285+index*15,0.4,300);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });
        }

        for(let index = 0;index < 40;index++){
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/brickWall.mtl",function(materials){
                materials.preload();
                var objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/brickWall.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(30,100,5);
                    mesh.rotation.set(0, Math.PI/2, 0);
                    mesh.position.set(297,0.4,300-index*15);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });
        }

        for(let index = 0;index < 40;index++){
            mtlloader = new THREE.MTLLoader(loadingManager);
            mtlloader.load("static/Models/brickWall.mtl",function(materials){
                materials.preload();
                var objloader = new THREE.OBJLoader(loadingManager);
                objloader.setMaterials(materials);
                objloader.load("static/Models/brickWall.obj",function(mesh){
                    mesh.traverse(function(node){
                        if(node instanceof THREE.Mesh){
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.scale.set(30,100,5);
                    mesh.position.set(-285+index*15,0.4,-297);
                    scene.add(mesh);
                    objects.push(mesh);
                });
            });
        }
    });
}
