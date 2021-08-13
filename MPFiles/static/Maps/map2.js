/**
 * SkyBox global variable
 * @type {THREE.Mesh}
 */
var skybox;

/**
 * snowmen global variable
 * @type {THREE.Mesh}
 */
var snowman;
var snowman2;

/**
 * cross global variable
 * @type {THREE.Mesh}
 */
var cross;
var cross2;

/**
 * loads the desired Map when called from 3dMap2.html
 */
function loadMap2(){
	//set sky
	setSky();
	//set external boundary
	setBoundary();
	//load designed map
	loadMap();

	//Designed by Tristan Le Forestier//
}

/**
 * loads objects around map
 */
function setBoundary(){
	//outside bordering fence ie trees
	for(let i = 0;i < 41;i++){
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/SnowModels/treePineSnowed.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/SnowModels/treePineSnowed.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,30,25);
				mesh.position.set(-300,0.4,300-i*15);
				scene.add(mesh);
				objects.push(mesh);
			});
		});
	}

	for(let i = 0;i < 41;i++){
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/SnowModels/treePineSnowed.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/SnowModels/treePineSnowed.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,30,25);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(-300+i*15,0.4,300);
				scene.add(mesh);
				objects.push(mesh);
			});
		});
	}

	for(let i = 0;i < 41;i++){
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/SnowModels/treePineSnowed.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/SnowModels/treePineSnowed.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,30,25);
				mesh.position.set(300,0.4,300-i*15);
				scene.add(mesh);
				objects.push(mesh);
			});
		});
	}

	for(let i = 0;i < 41;i++){
		var mtlloader = new THREE.MTLLoader(loadingManager);
		mtlloader.load("static/SnowModels/treePineSnowed.mtl",function(materials){
			materials.preload();
			var objloader = new THREE.OBJLoader(loadingManager);
			objloader.setMaterials(materials);
			objloader.load("static/SnowModels/treePineSnowed.obj",function(mesh){
				mesh.traverse(function(node){
					if(node instanceof THREE.Mesh){
						node.castShadow = true;
						node.receiveShadow = true;
					}
				});
				mesh.scale.set(10,30,25);
				mesh.rotation.set(0,Math.PI/2,0);
				mesh.position.set(-300+i*15,0.4,-300);
				scene.add(mesh);
				objects.push(mesh);
			});
		});
	}
}

/**
 * loads skybox textures
 */
function setSky(){
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

	//basic green floor
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/blockSnowLarge.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/blockSnowLarge.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(300,1,300);
			mesh.position.set(-300,0.4,300);
			scene.add(mesh);
		});
	});
}

/**
 * builds house
 */
function buildMainHouse(){
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

	// //planks of roof
	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(10,16,0);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(10,16,-14.8);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(25,16,0);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(25,16,15);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(25,16,-14.8);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(39.8,16,0);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });

	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(39.8,16,15);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });


	// var mtlloader = new THREE.MTLLoader(loadingManager);
	// mtlloader.load("static/Models/planks.mtl",function(materials){
	// 	materials.preload();
	// 	var objloader = new THREE.OBJLoader(loadingManager);
	// 	objloader.setMaterials(materials);
	// 	objloader.load("static/Models/planks.obj",function(mesh){
	// 		mesh.traverse(function(node){
	// 			if(node instanceof THREE.Mesh){
	// 				node.castShadow = true;
	// 				node.receiveShadow = true;
	// 			}
	// 		});
	// 		mesh.scale.set(15,8,15);
	// 		mesh.rotation.set(0,0,0);
	// 		mesh.position.set(5,16,3.2);
	// 		mainBuilding.add(mesh);
	// 		objects.push(mesh);
	// 	});
	// });
	// //end of planks

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


	//add trees inside house
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(43,5.5,-17);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(8,5.5,17);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});
	// add gifts
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/presentRound.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/presentRound.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(7,5.5,11.5);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/present.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/present.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(14,5.5,19);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/presentRound.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/presentRound.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(43,5.5,-11.5);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/present.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/present.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(10,10,10);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(38,5.5,-19);
			mainBuilding.add(mesh);
			objects.push(mesh);
		});
	});


	mainBuilding.scale.set(3,3,3);
	mainBuilding.position.set(-75,-15,0);
	scene.add(mainBuilding);

}

/**
 * loads completed map
 */
function loadMap(){
	//building
	buildMainHouse();

	//rocks and latern
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationLarge.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationLarge.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,-Math.PI/6,0);
			mesh.position.set(-100,2,270);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationSmall.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationSmall.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(30,10,20);
			mesh.rotation.set(0,-Math.PI/6,0);
			mesh.position.set(-80,2,270);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/candyCane.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/candyCane.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(30,100,20);
			//mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(-90,2,260);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationLarge.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationLarge.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,-Math.PI,0);
			mesh.position.set(100,2,-270);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationSmall.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationSmall.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(30,10,20);
			mesh.rotation.set(0,-Math.PI,0);
			mesh.position.set(80,2,-270);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/candyCane.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/candyCane.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(30,100,20);
			//mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(90,2,-260);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	//carts and snowman
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/snowmanFancy.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/snowmanFancy.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,-Math.PI,0);
			mesh.position.set(-65,2,-220);
			//mainBuilding.add(mesh);
			snowman = mesh;
			scene.add(snowman);
			objects.push(snowman);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crateStrong.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crateStrong.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(34,17,17);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(-2,2,-230);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crateStrong.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crateStrong.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,17,60);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(8.5,2,-228);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/cart.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/cart.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,15,17);
			mesh.rotation.set(0,Math.PI/5,0);
			mesh.position.set(110,2,-190);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/snowmanFancy.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/snowmanFancy.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,-Math.PI/6,0);
			mesh.position.set(65,2,220);
			//mainBuilding.add(mesh);
			snowman2 = mesh;
			scene.add(snowman2);
			objects.push(snowman2);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crateStrong.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crateStrong.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(34,17,17);
			mesh.rotation.set(0,-Math.PI/2,0);
			mesh.position.set(-2,2,230);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crateStrong.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crateStrong.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,17,60);
			mesh.rotation.set(0,-Math.PI/2,0);
			mesh.position.set(-12,2,227);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/cart.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/cart.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,15,17);
			mesh.rotation.set(0,Math.PI+Math.PI/5,0);
			mesh.position.set(-110,2,190);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/sled.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/sled.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,12,17);
			mesh.rotation.set(0,Math.PI/2+Math.PI/5,0);
			mesh.position.set(200,2,-200);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/sled.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/sled.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,12,17);
			mesh.rotation.set(0,-Math.PI/5,0);
			mesh.position.set(-165,2,180);
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

	makeChurch();

	//Giant Rocks
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationLarge.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationLarge.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(40,40,40);
			//mesh.rotation.set(0,0,0);
			mesh.position.set(170,2,0);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/trainWagonFlat.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/trainWagonFlat.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(80,80,80);
			mesh.rotation.set(0,-Math.PI/6,0);
			mesh.position.set(180,2,80);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/rockFormationLarge.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/rockFormationLarge.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(40,40,40);
			//mesh.rotation.set(0,0,0);
			mesh.position.set(-170,2,0);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/trainWagonFlat.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/trainWagonFlat.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(80,80,80);
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
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
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
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
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
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
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
	mtlloader.load("static/SnowModels/treeDecorated.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/treeDecorated.obj",function(mesh){
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

	//add objects to scene
	addSheds();
	addTractors();
	//light sources with shadow casting
	addLanterns();

	//directional light - sun light
	directionalLight(150,100,100);
}

/**
 * builds church
 */
function makeChurch(){
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

	//must make rotate
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
	mtlloader.load("static/Models/cross.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/cross.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(40,30,40);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(-280,60,0);
			//mainBuilding.add(mesh);
			cross = mesh;
			scene.add(cross);
			objects.push(cross);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/cross.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/cross.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(40,30,40);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(280,60,0);
			cross2=mesh;
			//mainBuilding.add(mesh);
			scene.add(cross2);
			objects.push(cross2);
		});
	});

	//grave stuff
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crossColumn.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crossColumn.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(280,.2,40);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crossWood.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crosswood.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(280,.2,50);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crossColumn.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crossColumn.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(-280,.2,-40);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/crossWood.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/crosswood.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(-280,.2,-50);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
}

/**
 * builds shed from models
 * @param shed
 */
function buildShed(shed){
	//shed1
	//walls for shed
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/cabinDoor.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/cabinDoor.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,0,0);
			mesh.position.set(20,2,100);
			shed.add(mesh);
			//scene.add(mesh);
			objects.push(mesh);
		});
	});
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/cabinWindow.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/cabinWindow.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(20,2,100);
			shed.add(mesh);
			//scene.add(mesh);
			objects.push(mesh);
		});
	});

	//walls 2
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/cabinWall.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/cabinWall.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,0,0);
			mesh.position.set(20,2,120);
			shed.add(mesh);
			//scene.add(mesh);
			objects.push(mesh);
		});
	})
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/SnowModels/cabinWindow.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/SnowModels/cabinWindow.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(20,20,20);
			mesh.rotation.set(0,Math.PI/2,0);
			mesh.position.set(0,2,100);
			shed.add(mesh);
			//scene.add(mesh);
			objects.push(mesh);
		});
	});
}

/**
 * add sheds to scene
 */
function addSheds(){
	var shed = new THREE.Object3D();
	var shed1 = new THREE.Object3D();
	var shed2 = new THREE.Object3D();
	var shed3 = new THREE.Object3D();
	var shed4 = new THREE.Object3D();
	var shed5 = new THREE.Object3D();

	buildShed(shed);
	shed.position.set(-170,0,170);
	scene.add(shed);

	buildShed(shed1);
	shed1.position.set(-200,0,170);
	scene.add(shed1);

	buildShed(shed4);
	shed4.position.set(-140,0,170);
	scene.add(shed4);


	buildShed(shed2);
	shed2.position.set(170,0,-170);
	shed2.rotation.set(0,Math.PI,0);
	scene.add(shed2);

	buildShed(shed3);
	shed3.position.set(200,0,-170);
	shed3.rotation.set(0,Math.PI,0);
	scene.add(shed3);

	buildShed(shed5);
	shed5.position.set(140,0,-170);
	shed5.rotation.set(0,Math.PI,0);
	scene.add(shed5);
}

/**
 * add tractors to scene
 */
function addTractors(){

	//tractors
	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/tractorShovel.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/tractorShovel.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,12,17);
			mesh.rotation.set(0,0,0);
			mesh.position.set(-50,2,230);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/tractorShovel.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/tractorShovel.obj",function(mesh){
			mesh.traverse(function(node){
				if(node instanceof THREE.Mesh){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			mesh.scale.set(17,12,17);
			mesh.rotation.set(0,Math.PI,0);
			mesh.position.set(50,2,-230);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});

	var mtlloader = new THREE.MTLLoader(loadingManager);
	mtlloader.load("static/Models/tractor.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/tractor.obj",function(mesh){
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
	mtlloader.load("static/Models/tractor.mtl",function(materials){
		materials.preload();
		var objloader = new THREE.OBJLoader(loadingManager);
		objloader.setMaterials(materials);
		objloader.load("static/Models/tractor.obj",function(mesh){
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
}

/**
 * add lanterns that emit light with shadow casting
 */
function addLanterns() {
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
			mesh.position.set(70,2,240);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});


	pointLight(70, 60, 238);

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
			mesh.position.set(-70,2,-240);
			//mainBuilding.add(mesh);
			scene.add(mesh);
			objects.push(mesh);
		});
	});
	pointLight(-70, 60, -238);
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