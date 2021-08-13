/**
 * SkyBox global variable
 * @type {THREE.Mesh}
 */
var skybox;

/**
 * windmill global variable
 * @type {THREE.Mesh}
 */
var windmill;
var windmill2;

/**
 * loads the desired Map when called from 3dMap1.html
 */
function loadMap1() {
	loadSky();

	var loadObj = loadMap();
	loadObj.then(myObj => {
		scene.add(myObj);
	});
}

/**
 * loads skybox and lighting
 */
function loadSky() {
	//directional light - the sun
	directionalLight(150,100,100);

	//add fog
	//scene.fog = new THREE.Fog( 0xffffff, 0, 750 );

	//make sky for background
	let materialArray = [];

	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_ft.jpg") }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_bk.jpg") }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_up.jpg") }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_dn.jpg")}));
	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_rt.jpg") }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: makeTexture("static/Sky/yonder_lf.jpg") }));

	for (let i = 0; i < 6; i++)
		materialArray[i].side = THREE.BackSide;

	let skyboxGeo = new THREE.BoxGeometry( 1000, 1000,1000);
	skybox = new THREE.Mesh( skyboxGeo, materialArray );
	//skybox.position.set(-300,0.4,300);
	scene.add( skybox );

	//allow renderer to cast shadows
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	//point light eminating from lanterns
	pointLight(90, 60, -238);
	pointLight(-90, 60, 238);
}

/**
 * loads all map elements
 * @returns {Promise<>}
 */
function loadMap(){

	return new Promise (function(){

		 //basic green floor
		var mtlloader = new THREE.MTLLoader(loadingManager);
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
		for(let i = 0;i < 40;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/Wood_Fence_01.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
				objloader.setMaterials(materials);
				objloader.load("static/Models/Wood_Fence_01.obj",function(mesh){
					mesh.traverse(function(node){
						if(node instanceof THREE.Mesh){
							node.castShadow = true;
							node.receiveShadow = true;
						}
					});
					mesh.scale.set(5,10,5);
					mesh.position.set(-300,0.4,300-i*15);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		for(let i = 0;i < 40;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/Wood_Fence_01.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
				objloader.setMaterials(materials);
				objloader.load("static/Models/Wood_Fence_01.obj",function(mesh){
					mesh.traverse(function(node){
						if(node instanceof THREE.Mesh){
							node.castShadow = true;
							node.receiveShadow = true;
						}
					});
					mesh.scale.set(5,10,5);
					mesh.rotation.set(0,Math.PI/2,0);
					mesh.position.set(-285+i*15,0.4,300);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		for(let i = 0;i < 40;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/Wood_Fence_01.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
				objloader.setMaterials(materials);
				objloader.load("static/Models/Wood_Fence_01.obj",function(mesh){
					mesh.traverse(function(node){
						if(node instanceof THREE.Mesh){
							node.castShadow = true;
							node.receiveShadow = true;
						}
					});
					mesh.scale.set(5,10,5);
					mesh.position.set(297,0.4,300-i*15);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		for(let i = 0;i < 40;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/Wood_Fence_01.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
				objloader.setMaterials(materials);
				objloader.load("static/Models/Wood_Fence_01.obj",function(mesh){
					mesh.traverse(function(node){
						if(node instanceof THREE.Mesh){
							node.castShadow = true;
							node.receiveShadow = true;
						}
					});
					mesh.scale.set(5,10,5);
					mesh.rotation.set(0,Math.PI/2,0);
					mesh.position.set(-285+i*15,0.4,-297);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		//building
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallDoorwaySquare.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallDoorwaySquare.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,5,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,5,-15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,5,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallDoorwaySquare.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallDoorwaySquare.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,5,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,5,-15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,5,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(10,5,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallDoorwaySquare.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallDoorwaySquare.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(25,5,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(40,5,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(10,5,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallDoorwaySquare.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallDoorwaySquare.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(25,5,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(40,5,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/stairsCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/stairsCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,8,10);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(2.5,5,3.2);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/stairsCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/stairsCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,8,10);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(47,5,-2.7);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(10,16,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(10,16,-14.8);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(25,16,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(25,16,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(25,16,-14.8);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(39.8,16,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/planks.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/planks.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(39.8,16,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,15,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,15,-15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(0,15,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,15,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,15,-15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.position.set(45,15,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(10,15,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(25,15,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(40,15,-20);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(10,15,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(25,15,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(5,12,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(40,15,25);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roof.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roof.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(10,27,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(10,27,-14.8);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(10,27,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofFlat.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofFlat.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,0,0);
				mesh.position.set(25,31,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roof.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roof.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(25,27,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roof.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roof.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(25,27,-14.8);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roof.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roof.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(39.8,27,0);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(39.8,27,15);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofCorner.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofCorner.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,8,15);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(39.8,27,-14.8);
				mainBuilding.add(mesh);
				objects.push(mesh);
			});
		});

		mainBuilding.scale.set(3,3,3);
		mainBuilding.position.set(-75,-15,0);
		scene.add(mainBuilding);

		//roads
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadCornerLarger.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadCornerLarger.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(50,8,50);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(-200,2,300);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/rockWide.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/rockWide.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(-100,2,270);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/rockSmall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/rockSmall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,10,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(-80,2,270);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/lantern.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/lantern.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,40,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(-90,2,240);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadPitGarage.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(100,8,70);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(-50,2,142.2);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadPitGarage.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(100,8,70);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(15,2,142.2);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadStraightLong.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadStraightLong.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(50,8,107);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(85,2,150);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadCornerLarger.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadCornerLarger.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(50,8,50);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(200,2,-300);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/rockWide.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/rockWide.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(100,2,-270);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/rockSmall.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/rockSmall.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,10,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(80,2,-270);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/lantern.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/lantern.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,40,20);
				//mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(90,2,-240);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadPitGarage.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(100,8,70);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(50,2,-142.2);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadPitGarage.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadPitGarage.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(100,8,70);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(-15,2,-142.2);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roadStraightLong.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roadStraightLong.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(50,8,107);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(-299,2,-200);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//cars
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/delivery.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/delivery.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,20);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(-65,2,-220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/sedan.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
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
				mesh.position.set(-2,2,-230);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/taxi.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/taxi.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				mesh.rotation.set(0,Math.PI/5,0);
				mesh.position.set(110,2,-190);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/delivery.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/delivery.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,20);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(65,2,220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/sedan.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/sedan.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				mesh.rotation.set(0,-Math.PI/2,0);
				mesh.position.set(2,2,230);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/taxi.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/taxi.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				mesh.rotation.set(0,Math.PI+Math.PI/5,0);
				mesh.position.set(-110,2,190);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//camp must try add fire
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Campfire_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Campfire_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				//mesh.rotation.set(0,Math.PI+Math.PI/5,0);
				mesh.position.set(220,1.2,-150);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/truck.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/truck.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(200,2,-140);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/tent.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/tent.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,30,40);
				mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(220,2,-120);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Tent_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Tent_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(4,3,4);
				mesh.rotation.set(0,-Math.PI/2+Math.PI/5,0);
				mesh.position.set(240,2,-110);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Tent_Poles_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Tent_Poles_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(4,3,4);
				mesh.rotation.set(0,-Math.PI/2+Math.PI/5,0);
				mesh.position.set(240,2,-110);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Campfire_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Campfire_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				//mesh.rotation.set(0,Math.PI+Math.PI/5,0);
				mesh.position.set(-220,1.2,150);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/truck.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/truck.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(17,12,17);
				mesh.rotation.set(0,-Math.PI/5,0);
				mesh.position.set(-185,2,120);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/tent.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/tent.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,30,40);
				mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-270,2,100);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Tent_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Tent_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(4,3,4);
				mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-240,2,100);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/Tent_Poles_01.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/Tent_Poles_01.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(4,3,4);
				mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-240,2,100);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//windmill
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWoodBlock.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWoodBlock.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-280,0,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(-280,0,38);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
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
				mesh.position.set(-280,0,-38);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/door.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/door.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,25,30);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-275,0,15);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofPoint.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofPoint.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-280,40,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/pillarWood.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/pillarWood.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,30,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(-280,60,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//must make rotate
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/windmill.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/windmill.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,20,20);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(-270,90,0);
				windmill = mesh;
				scene.add(windmill);
				objects.push(windmill);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWoodBlock.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWoodBlock.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(280,0,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/wallWindowGlass.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(280,0,38);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/wallWindowGlass.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
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
				mesh.position.set(280,0,-38);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/door.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/door.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,25,30);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(275,0,-15);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/roofPoint.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/roofPoint.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,40,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(280,40,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/pillarWood.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/pillarWood.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,30,40);
				//mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
				mesh.position.set(280,60,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//must make rotate
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/windmill.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/windmill.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(40,20,20);
				mesh.rotation.set(0,Math.PI,0);
				mesh.position.set(270,90,0);
				windmill2 = mesh;
				scene.add(windmill2);
				objects.push(windmill2);
			});
		});

		//fountain
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/fountainRound.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/fountainRound.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,20,30);
				//mesh.rotation.set(0,0,0);
				mesh.position.set(170,2,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/fountainRoundDetail.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/fountainRoundDetail.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,20,15);
				//mesh.rotation.set(0,0,0);
				mesh.position.set(170,4,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/cartHigh.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/cartHigh.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,30);
				mesh.rotation.set(0,-Math.PI/6,0);
				mesh.position.set(180,2,80);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/fountainRound.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/fountainRound.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,20,30);
				//mesh.rotation.set(0,0,0);
				mesh.position.set(-170,2,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/fountainRoundDetail.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/fountainRoundDetail.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(15,20,15);
				//mesh.rotation.set(0,0,0);
				mesh.position.set(-170,4,0);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/cartHigh.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/cartHigh.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(20,20,30);
				mesh.rotation.set(0,Math.PI-Math.PI/6,0);
				mesh.position.set(-180,2,-80);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		//stall
		for(let i = 0;i < 3;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallRed.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(-250+60*i,2,-250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});

			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallBench.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(-260+60*i,2,-250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});

			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallBench.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(-240+60*i,2,-250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/treeHigh.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/treeHigh.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,30,30);
				mesh.rotation.set(0,0,0);
				mesh.position.set(-220,2,-220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
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
				mesh.scale.set(30,30,30);
				mesh.rotation.set(0,0,0);
				mesh.position.set(-160,2,-220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		for(let i = 0;i < 3;i++){
			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallRed.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(250-60*i,2,250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});

			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallBench.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(260-60*i,2,250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});

			var mtlloader = new THREE.MTLLoader(loadingManager);
			mtlloader.load("static/Models/stallBench.mtl",function(materials){
				materials.preload();
				var objloader = new THREE.OBJLoader(loadingManager);
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
					mesh.position.set(240-60*i,2,250);
					//mainBuilding.add(mesh);
					scene.add(mesh);
					objects.push(mesh);
				});
			});
		}

		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/Models/treeHigh.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/Models/treeHigh.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(30,30,30);
				mesh.rotation.set(0,0,0);
				mesh.position.set(220,2,220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

		var mtlloader = new THREE.MTLLoader(loadingManager);
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
				mesh.scale.set(30,30,30);
				mesh.rotation.set(0,0,0);
				mesh.position.set(160,2,220);
				//mainBuilding.add(mesh);
				scene.add(mesh);
				objects.push(mesh);
			});
		});

	});
}

/**
 * adds point light to scene
 * @param x
 * @param y
 * @param z
 */
function pointLight(x, y, z) {
	//Create a PointLight and turn on shadows for the light
	var light = new THREE.PointLight( 0xffffff, 2.5, 100 ); //color, intensity, distance
	light.position.set(x,y,z); //x,y,z co-ordinates of light's position
	light.castShadow = true;
	scene.add(light);
	//Set up shadow properties for the light
	light.shadow.mapSize.width = window.innerWidth;
	light.shadow.mapSize.height = window.innerHeight;
	light.shadow.camera.near = 0.5;
	light.shadow.camera.far = 500;
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
