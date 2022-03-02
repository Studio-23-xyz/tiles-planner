//importing necessary things
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "./files/Loader.js";
import { FBXLoader } from "./files/Loader.js";
import { OBJLoader } from "./files/Loader.js";
import { Reflector } from "./files/Reflector.js";
import { PointerLockControls } from "./files/PointerLockControls.js";
import { RGBELoader } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/jsm/loaders/RGBELoader.js";


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
    textureLink;

const clock = new THREE.Clock();



let link = "asset/home/testRoom.glb";
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

    // let DirectionalLightbt = new THREE.DirectionalLight(0xffffff, 0.7);
    // DirectionalLightbt.position.set(3, -8, 1.5);

    // scene.add(DirectionalLightbt);

    // let DirectionalLightside = new THREE.DirectionalLight(0xffffff, 0.5);
    // DirectionalLightside.position.set(7, 8, 0);

    // scene.add(DirectionalLightside);

    // let DirectionalLightside2 = new THREE.DirectionalLight(0xffffff, 0.5);
    // DirectionalLightside2.position.set(-7, 8, 0);

    // scene.add(DirectionalLightside2);

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;

    const GLTFloader = new GLTFLoader();
   GLTFloader.load("asset/home/far/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(0, 0, -100);
        obj.scale.multiplyScalar(25 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });


    let geometry = new THREE.BoxGeometry(200, 200, 0.1);

    let mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
        })
    );
    
    mesh.position.y = 50;
    mesh.rotation.x = - Math.PI / 2;
    mesh.name = 'roof';
    scene.add(mesh);

     geometry = new THREE.BoxGeometry(200, 200, 0.1);

     
     mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
        })
    );
    mesh.position.y = -30;
    mesh.rotation.x = - Math.PI / 2;
    mesh.name = 'floor';
    scene.add(mesh);


     geometry = new THREE.BoxGeometry(200, 80, 0.1);

     mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('/texture/sidewall1.jpg')
        })
    );
    mesh.position.z = -100;
    mesh.position.y = 10;

    scene.add(mesh);

     geometry = new THREE.BoxGeometry(200, 80, 0.1);

     mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.BackSide,
            //belkuni
            map: new THREE.TextureLoader().load('/texture/belkony.jpg')
        })
    );
    mesh.position.z = 100;
    mesh.position.y = 10;
    

    scene.add(mesh);

     geometry = new THREE.BoxGeometry(200, 200, 0.1);

     mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('/texture/wallTextureSide.jpeg', (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(12, 22);
            })
        })
    );
    mesh.position.x = 100;
    mesh.rotation.y = - Math.PI / 2;
    

    scene.add(mesh);

    geometry = new THREE.BoxGeometry(200, 200, 0.1);

     mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('/texture/wallTextureSide.jpeg', (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(12, 22);
            })
        })
    );
    mesh.position.x = -100;
    mesh.rotation.y = - Math.PI / 2;
    

    scene.add(mesh);

    const box = new THREE.Box3().setFromObject(mesh);

    const boxSize = box.getSize(new THREE.Vector3()).length();
    const boxCenter = box.getCenter(new THREE.Vector3());
    const halfSizeToFitOnScreen = boxSize * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    
    //setup orbit controller
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    // controls.autoRotate = true;
    controls.screenSpacePanning = false;
    controls.update();

    // controls.maxDistance =  25;


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