//importing necessary things
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "./files/Loader.js";
import { FBXLoader } from "./files/Loader.js";
import { OBJLoader } from "./files/Loader.js";
import { Reflector } from "./files/Reflector.js";
import { PointerLockControls } from "./files/PointerLockControls.js";

//console.log(ARButton);
let camera,
    scene,
    renderer,
    obj = "",
    controls,
    mixer,
    mouse,
    rayCast,
    angel = 0,
    INTERSECTED,
    textureLink,
    cameraZ;

const clock = new THREE.Clock();

function fitCameraToObject( camera, object, offset, controls ) {

	offset = offset || 1.25;
    console.log(object);

	const boundingBox = new THREE.Box3();

	// get bounding box of object - this will be used to setup controls and camera
	boundingBox.setFromObject( object );
        
            //ERRORS HERE
	const center = boundingBox.getCenter();
	const size = boundingBox.getSize();

	// get the max side of the bounding box (fits to width OR height as needed )
	const maxDim = Math.max( size.x, size.y, size.z );
	const fov = camera.fov * ( Math.PI / 180 );
	cameraZ = Math.abs( maxDim / 2 * Math.tan( fov * 2 ) ); //Applied fifonik correction

	cameraZ *= offset; // zoom out a little so that objects don't fill the screen

	// <--- NEW CODE
	//Method 1 to get object's world position
	scene.updateMatrixWorld(); //Update world positions
	var objectWorldPosition = new THREE.Vector3();
	objectWorldPosition.setFromMatrixPosition( object.matrixWorld );
	
	//Method 2 to get object's world position
	//objectWorldPosition = object.getWorldPosition();

	const directionVector = camera.position.sub(objectWorldPosition); 	//Get vector from camera to object
	const unitDirectionVector = directionVector.normalize(); // Convert to unit vector
	camera.position = unitDirectionVector.multiplyScalar(cameraZ); //Multiply unit vector times cameraZ distance
	camera.lookAt(objectWorldPosition); //Look at object
	// --->

	const minZ = boundingBox.min.z;
	const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

	camera.far = cameraToFarEdge * 3;
	camera.updateProjectionMatrix();

	if ( controls ) {

	  // set camera to rotate around center of loaded object
	  controls.target = center;

	  // prevent camera from zooming out far enough to create far plane cutoff
	  controls.maxDistance = cameraToFarEdge * 2;
             // ERROR HERE	
	  controls.saveState();

	} else {

		camera.lookAt( center )

   }
}

let link = "asset/new3/Isometric Room.gltf";
const clickHandler = (e) => {
    //console.log(e.clientX, e.clientY);
    document.querySelector(".wrapper").style.right = "0";

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);

    var intersects = rayCast.intersectObjects(scene.children);
    console.log(intersects);

    if (intersects.length > 0) {
        if (INTERSECTED != intersects[intersects.length - 1].object) {
            INTERSECTED = intersects[intersects.length - 1].object;
        }
    }
};
let changeTexture = (textureLink) => {
    console.log(INTERSECTED);

    if (INTERSECTED.material.map !== null) {
        // castMaterial[1].object.material.map = new THREE.TextureLoader().load('./Paint_Texture.jpg');
        let x = new THREE.TextureLoader().load(textureLink, function (texture) {
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.LinearFilter;
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(5, 5);

            texture.center.set(0.5, 0.5);

            texture.generateMipmaps = true;
        });
        INTERSECTED.material.map = x;
    } else {
        INTERSECTED.material.needsUpdate = true;
        // INTERSECTED.material.alpha = 0.5;
        INTERSECTED.material.map = new THREE.TextureLoader().load(
            textureLink,
            function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(5, 5);
            }
        );
    }
};
let changeTextureAngel = (textureLink) => {
    console.log(INTERSECTED);
    if (INTERSECTED.material.map !== null) {
        // castMaterial[1].object.material.map = new THREE.TextureLoader().load('./Paint_Texture.jpg');
        INTERSECTED.material.map = new THREE.TextureLoader().load(
            textureLink,
            function (texture) {
                texture.magFilter = THREE.NearestFilter;
                texture.minFilter = THREE.LinearFilter;
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(5, 5);

                texture.center.set(0.5, 0.5);
                texture.rotation = THREE.Math.degToRad(angel);

                texture.generateMipmaps = true;
            }
        );
    } else {
        INTERSECTED.material.needsUpdate = true;
        // INTERSECTED.material.alpha = 0.5;
        let x = new THREE.TextureLoader().load(textureLink, function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(5, 5);
            texture.center.set(0.5, 0.5);
            texture.rotation = THREE.Math.degToRad(angel);

            texture.generateMipmaps = true;
        });
        INTERSECTED.material.map = x;
    }
};

document.getElementById("t1").addEventListener("click", () => {
    textureLink =
        "https://threejs.org/examples/textures/758px-Canestra_di_frutta_(Caravaggio).jpg";
    changeTexture(textureLink);
});
document.getElementById("t2").addEventListener("click", () => {
    textureLink = "./Paint_Texture.jpg";
    changeTexture(textureLink);
});

document.getElementById("0").addEventListener("click", () => {
    angel = 0;
    changeTextureAngel(textureLink);
});
document.getElementById("45").addEventListener("click", () => {
    angel = 45;
    changeTextureAngel(textureLink);
});
document.getElementById("90").addEventListener("click", () => {
    angel = 90;
    changeTextureAngel(textureLink);
});
document.getElementById("135").addEventListener("click", () => {
    angel = 135;
    changeTextureAngel(textureLink);
});
document.getElementById("180").addEventListener("click", () => {
    angel = 180;
    changeTextureAngel(textureLink);
});

function init() {
    //getting canvas
    var canvReference = document.getElementById("myCanvasElement");

    //create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color("skyblue");

    //set resderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    //setup camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.lookAt(scene.position);
    camera.position.set(0, 0, 25);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.setSize(window.innerWidth, window.innerHeight, false);
    document.body.appendChild(renderer.domElement);

    //setup light
    let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.8);

    scene.add(light);

    let DirectionalLightbt = new THREE.DirectionalLight(0xffffff, 0.7);
    DirectionalLightbt.position.set(3, -8, 1.5);

    scene.add(DirectionalLightbt);

    let DirectionalLightside = new THREE.DirectionalLight(0xffffff, 0.5);
    DirectionalLightside.position.set(7, 8, 0);

    scene.add(DirectionalLightside);

    let DirectionalLightside2 = new THREE.DirectionalLight(0xffffff, 0.5);
    DirectionalLightside2.position.set(-7, 8, 0);

    scene.add(DirectionalLightside2);

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;

    const FBXloader = new FBXLoader();
    const GLTFloader = new GLTFLoader();
    const OBJloader = new OBJLoader();

    // FBXloader.load("asset/ss/source/a.fbx", function (gltf) {
    //     obj = gltf;
    //     console.log(obj);
    //     var bbox = new THREE.Box3().setFromObject(obj);
    //     var size = bbox.getSize(new THREE.Vector3());

    //     var maxAxis = Math.max(size.x, size.y, size.z);
    //     // console.log(maxAxis);
    //     // obj.position.set(0, -5, 0);
    //     obj.scale.multiplyScalar(6 / maxAxis);

    // let geometry = new THREE.BoxBufferGeometry(55,55,55);
    // let mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    //     color: 'white',
    //     side: THREE.DoubleSide,
    // }));

    // scene.add(mesh);

   

    let geometry = new THREE.BoxGeometry(50, 50, 50);

    let mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
        })
    );

    let room = mesh;
    
    scene.add(room);

   

    let sphere = new THREE.SphereBufferGeometry(5, 50, 50);
    mesh = new THREE.Mesh(
        sphere,
        new THREE.MeshLambertMaterial({
            color: "white",
            side: THREE.DoubleSide,
            reflectivity: 0.5,
            combine: THREE.MixOperation,
        })
    );

    scene.add(mesh);

    // GLTFloader.load(link, function (gltf) {
    //     obj = gltf.scene;
    //     console.log(gltf);
    //     var bbox = new THREE.Box3().setFromObject(obj);
    //     var size = bbox.getSize(new THREE.Vector3());

    //     var maxAxis = Math.max(size.x, size.y, size.z);
    //     // console.log(maxAxis);
    //     // obj.position.set(0, -5, 0);
    //     obj.scale.multiplyScalar(11 / maxAxis);

    //       if (gltf.animations.length) {
    //         mixer = new THREE.AnimationMixer(gltf.scene);
    //         mixer.clipAction(gltf.animations[0]).play();
    //     }

    //     //   console.log('ssss');

    //     scene.add(obj);
    // });

    //setup orbit controller
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    // controls.autoRotate = true;
    controls.screenSpacePanning = false;
    controls.update();

   

    // fitCameraToObject(camera, room, 1, controls)


    // controls = new PointerLockControls(camera, renderer.domElement);

    // // add event listener to show/hide a UI (e.g. the game's menu)

    // controls.addEventListener("lock", function () {
    //     console.log('lock');
    // });

    // controls.addEventListener("unlock", function () {
    //     console.log('unlock');
    // });

    renderer.setAnimationLoop(render);

    //for responsiveness
    window.addEventListener("resize", onWindowResize);
    document.addEventListener("click", clickHandler);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight, false);

    // renderer.setSize(window.innerWidth, window.innerHeight, false);
    render();
}

function render() {
    if (mixer) mixer.update(clock.getDelta());

    
    renderer.render(scene, camera);
}

init();
render();
