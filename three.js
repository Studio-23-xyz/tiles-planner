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
    textureLink,
    spotLight1,
    spotLight2,
    checkDrag = false,
    material1,
    material2,
    material3,
    mesh;

let arrowCheck1 = true,
    arrowCheck2 = true;

let wallUp, wallDown, wallRight, wallLeft, wallFont, wallBack;

let cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(500, {
    generateMipmaps: true,
    minFilter: true,
});
let cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(500, {
    generateMipmaps: true,
    minFilter: true,
});
let cubeRenderTarget3 = new THREE.WebGLCubeRenderTarget(500, {
    generateMipmaps: true,
    minFilter: true,
});

const clock = new THREE.Clock();

let link = "asset/home/testRoom.glb";
const clickHandler = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);

    var intersects = rayCast.intersectObjects(scene.children);
    // wrapperForFloor

    if (checkDrag === false) {
        if (intersects[intersects.length - 1].object.name === "roof") {
            document.querySelector(".wrapperForselling").style.display = "flex";
            document.querySelector(".wrapper").style.display = "none";
            document.querySelector(".wrapperForFloor").style.display = "none";
            document.querySelector(".wrapperForselling").style.right = "0";
        } else if (
            intersects[intersects.length - 1].object.name === "rightWall" ||
            intersects[intersects.length - 1].object.name === "leftWall"
        ) {
            arrowCheck1 = true;
            arrowCheck2 = true;
            document.getElementById("arrowBtn1").classList.remove("rotation");
            document.querySelector(".wrapperForselling").style.display = "none";
            document.querySelector(".wrapper").style.display = "block";
            document.querySelector(".wrapperForFloor").style.display = "none";
            document.querySelector(".wrapper").style.right = "0";
        } else if (intersects[intersects.length - 1].object.name === "floor") {
            arrowCheck1 = true;
            arrowCheck2 = true;
            document.getElementById("arrowBtn2").classList.remove("rotation");
            document.querySelector(".wrapperForselling").style.display = "none";
            document.querySelector(".wrapper").style.display = "none";
            document.querySelector(".wrapperForFloor").style.display = "block";
            document.querySelector(".wrapperForFloor").style.right = "0";
        } else {
            document.querySelector(".wrapperForselling").style.display = "none";
            document.querySelector(".wrapper").style.display = "none";
            document.querySelector(".wrapperForFloor").style.display = "none";
        }
    } else {
        document.querySelector(".wrapperForselling").style.display = "none";
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".wrapperForFloor").style.display = "none";
    }

    textureLink = intersects[intersects.length - 1].object.material.map;

    if (intersects.length > 0) {
        if (INTERSECTED != intersects[intersects.length - 1].object) {
            INTERSECTED = intersects[intersects.length - 1].object;
        }
    }
};

//rotation arrow

document.getElementById("arrowBtn1").addEventListener("click", () => {
    if (arrowCheck1) {
        document.querySelector(".wrapper").style.right = "-422px";
        document.getElementById("arrowBtn1").classList.add("rotation");
        arrowCheck1 = false;
        arrowCheck2 = true;
    } else {
        document.querySelector(".wrapper").style.right = 0;
        document.getElementById("arrowBtn1").classList.remove("rotation");
        arrowCheck1 = true;
        arrowCheck2 = true;
    }
});
document.getElementById("arrowBtn2").addEventListener("click", () => {
    if (arrowCheck2) {
        document.querySelector(".wrapperForFloor").style.right = "-422px";
        document.getElementById("arrowBtn2").classList.add("rotation");
        arrowCheck2 = false;
        arrowCheck1 = true;
    } else {
        document.querySelector(".wrapperForFloor").style.right = 0;
        document.getElementById("arrowBtn2").classList.remove("rotation");
        arrowCheck2 = true;
        arrowCheck1 = true;
    }
});

var overlay = document.querySelector(".wrapperForselling");
overlay.addEventListener("click", function (ev) {
    ev.stopPropagation();
});
var overlay2 = document.querySelector(".wrapperForFloor");
overlay2.addEventListener("click", function (ev) {
    ev.stopPropagation();
});
var overlay3 = document.querySelector(".wrapper");
overlay3.addEventListener("click", function (ev) {
    ev.stopPropagation();
});

document.getElementById("cancel1").addEventListener("click", () => {
    document.querySelector(".wrapperForselling").style.right = "-47%";
});

//color
document.getElementById("favcolor").addEventListener("change", () => {
    INTERSECTED.material.color.set(document.getElementById("favcolor").value);
    document.querySelector(".wrapperForselling").style.right = "-47%";
});

let changeTexture = (textureLink) => {
    let x = new THREE.TextureLoader().load(textureLink, function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(10, 12);
        // texture.anisotropy = 46;
    });
    INTERSECTED.material.map = x;
    INTERSECTED.material.opacity = 0.6;
};
let changeTextureAngel = () => {
    INTERSECTED.material.map.rotation = THREE.Math.degToRad(angel);
};

document.getElementById("t1").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    textureLink = "./texture/wd.jpeg";
    changeTexture(textureLink);
});
document.getElementById("t2").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    textureLink = "./texture/wp1.jpeg";
    changeTexture(textureLink);
});

//floor texture change event
document.getElementById("t1Floor").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    textureLink = "./texture/floort1.jpeg";
    changeTexture(textureLink);
});
document.getElementById("t2Floor").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    textureLink = "./texture/floort2.jpeg";
    changeTexture(textureLink);
});

document.getElementById("0").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 0;
    changeTextureAngel(textureLink);
});

document.getElementById("45").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 45;
    changeTextureAngel(textureLink);
});
document.getElementById("90").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 90;
    changeTextureAngel(textureLink);
});
document.getElementById("135").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 135;
    changeTextureAngel(textureLink);
});
document.getElementById("180").addEventListener("click", () => {
    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 180;
    changeTextureAngel(textureLink);
});

//angle for floor
document.getElementById("0f").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 45;
    changeTextureAngel(textureLink);
});

document.getElementById("45f").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 45;
    changeTextureAngel(textureLink);
});
document.getElementById("90f").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 90;
    changeTextureAngel(textureLink);
});
document.getElementById("135f").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 135;
    changeTextureAngel(textureLink);
});
document.getElementById("180f").addEventListener("click", () => {
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 180;
    changeTextureAngel(textureLink);
});

//scene rotation
let p1_flag, p2_flag, p3_flag, p4_flag;
document.getElementById("p1").addEventListener("click", () => {
    controls.reset();
    checkDrag = true;
    scene.rotation.y = 0;
    p1_flag = false;
    p2_flag = true;
    p3_flag = true;
    p4_flag = true;
});
document.getElementById("p2").addEventListener("click", () => {
    controls.reset();
    checkDrag = true;
    p1_flag = true;
    p2_flag = false;
    p3_flag = true;
    p4_flag = true;
});
document.getElementById("p3").addEventListener("click", () => {
    controls.reset();
    checkDrag = true;
    p1_flag = true;
    p2_flag = true;
    p3_flag = false;
    p4_flag = true;
});
document.getElementById("p4").addEventListener("click", () => {
    controls.reset();
    checkDrag = true;
    p1_flag = true;
    p2_flag = true;
    p3_flag = true;
    p4_flag = false;
});

//save canvas

//save as img
// imgSave
document.getElementById("imgSave").addEventListener("click", () => {
    var canvas = document.getElementById("myCanvasElement");

    var url = canvas.toDataURL();

    var link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "canvas.png");

    link.click();
});
//save as pdf
// pdfSave
document.getElementById("pdfSave").addEventListener("click", () => {
    var __CANVAS = document.getElementById("myCanvasElement");
    let pdf;

    let width = __CANVAS.width;
    let height = __CANVAS.height;

    //set the orientation
    if (width > height) {
        pdf = new jsPDF("l", "px", [width, height]);
    } else {
        pdf = new jsPDF("p", "px", [height, width]);
    }
    //then we get the dimensions from the 'pdf' file itself
    width = pdf.internal.pageSize.getWidth();
    height = pdf.internal.pageSize.getHeight();
    pdf.addImage(__CANVAS, "PNG", 0, 0, width, height);
    pdf.save("download.pdf");
});

function init() {
    //getting canvas
    var canvReference = document.getElementById("myCanvasElement");

    window.addEventListener("load", () => {
        setInterval(() => {
            document.getElementById("loaderparent").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }, 500);
    });

    //create scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color("white");
    scene.rotation.set(0, 0, 0);

    //set resderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        canvas: canvReference,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    //setup camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.set(0, 0, 80);

    renderer.setSize(window.innerWidth, window.innerHeight, false);

    //setup light
    let light = new THREE.AmbientLight(0xffffff, 0.8);

    scene.add(light);

    let DirectionalLightbt = new THREE.DirectionalLight(0xffffff, 0.3);
    DirectionalLightbt.position.set(0, 0, -10);

    DirectionalLightbt.shadow.mapSize.width = 512; // default
    DirectionalLightbt.shadow.mapSize.height = 512; // default
    DirectionalLightbt.shadow.camera.near = 0.5; // default
    DirectionalLightbt.shadow.camera.far = 500; // default

    scene.add(DirectionalLightbt);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.4, 60);
    pointLight1.position.set(-40, 13, -56);
    scene.add(pointLight1);

    const pointLight = new THREE.PointLight(0xffffff, 0.4, 60);
    pointLight.position.set(40, 13, -56);
    scene.add(pointLight);

    // let DirectionalLightside2 = new THREE.DirectionalLight(0xffffff, 1);
    // DirectionalLightside2.position.set(0, 0, 100);

    // scene.add(DirectionalLightside2);

    // let DirectionalLightside3 = new THREE.DirectionalLight(0xffffff, 0.4);
    // DirectionalLightside3.position.set(0, 0, -100);

    // scene.add(DirectionalLightside3);

    // let DirectionalLightside4 = new THREE.DirectionalLight(0xffffff, 0.5);
    // DirectionalLightside4.position.set(0, -100, 0);

    // scene.add(DirectionalLightside4);

    // let DirectionalLightside5 = new THREE.DirectionalLight(0xffffff, 0);
    // DirectionalLightside5.position.set(0, 200, 0);

    // scene.add(DirectionalLightside5);

    //raycaster

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;

    const GLTFloader = new GLTFLoader();
    const FBXloader = new FBXLoader();

    GLTFloader.load("asset/home/far/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(0, -30, -57);
        obj.rotation.set(0, Math.PI / 2, 0);

        obj.scale.multiplyScalar(90 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });

    //chair
    GLTFloader.load("asset/home/SheenChair.glb", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(-65, -30, 76);
        obj.rotation.set(0, 14.8, 0);

        obj.scale.multiplyScalar(37 / maxAxis);

        obj.castShadow = true;
        obj.receiveShadow = true;

        //   console.log('ssss');

        scene.add(obj);
    });

    //wallpaper
    GLTFloader.load("asset/home/wallpaper/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(65, -30, 0);
        obj.rotation.set(0, -Math.PI / 2, 0);

        obj.scale.multiplyScalar(37 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });

    //light1
    GLTFloader.load("asset/home/lamp/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(-40, -10, -57);

        obj.scale.multiplyScalar(37 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });
    //light2
    GLTFloader.load("asset/home/lamp/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(40, -10, -57);

        obj.scale.multiplyScalar(37 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });

    //     //shelf

    GLTFloader.load("asset/shelf/scene.gltf", function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(-88, 0, 0);
        obj.rotation.set(0, Math.PI / 2, 0);

        obj.scale.multiplyScalar(30 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });

    //create room
    let geometry = new THREE.BoxGeometry(200, 200, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
        })
    );

    mesh.position.y = 50;
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = "roof";
    wallUp = mesh;
    scene.add(mesh);

    //.....................................
    geometry = new THREE.BoxGeometry(200, 200, 0.1);

    const groundMirror = new Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x777777,
    });
    groundMirror.position.y = -30.01;
    groundMirror.material.flatShading = true;
    groundMirror.rotation.x = -Math.PI / 2;
    scene.add(groundMirror);

    let floor;

    material1 = new THREE.MeshBasicMaterial({
        transparent: true,
        color: "#e6eaed",
        opacity: 0.65,

        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/testTexture.jpeg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(10, 12);
            }
        ),
    });

    floor = new THREE.Mesh(geometry, material1);
    floor.position.y = -30;
    floor.material.flatShading = true;
    floor.rotation.x = -Math.PI / 2;
    floor.name = "floor";
    wallDown = floor;
    scene.add(floor);
    //......................................
    //

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load("/texture/sidewall1.jpg"),
        })
    );

    mesh.position.z = -100;
    mesh.position.y = 10;

    wallBack = mesh;
    scene.add(mesh);

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.BackSide,
            //belkuni
            map: new THREE.TextureLoader().load("/texture/belkony.jpg"),
        })
    );

    mesh.position.z = 100;
    mesh.position.y = 10;

    wallFont = mesh;
    scene.add(mesh);
    
    //..............................

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    const rightMirror = new Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x777777,
    });
    rightMirror.position.y = 10;
    rightMirror.material.flatShading = true;
    rightMirror.position.x = 100.01;
    rightMirror.rotation.y = -Math.PI / 2;
    scene.add(rightMirror);

    material2 = new THREE.MeshLambertMaterial({
        color: '#c9cdd1',
        transparent: true,
        opacity: 0.65,
        // reflectivity: 0.1,
        // roughness: 0.05,
        // metalness: 0.5,
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/testTexture.jpeg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(10, 12);
            }
        ),
    });

    mesh = new THREE.Mesh(geometry, material2);
    mesh.name = "rightWall";
    mesh.position.y = 10;
    mesh.position.x = 100;
    mesh.rotation.y = -Math.PI / 2;
    wallRight = mesh;
    scene.add(wallRight);
    //.........................................

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    const leftMirror = new Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x777777,
    });
    leftMirror.position.y = 10;
    leftMirror.material.flatShading = true;
    leftMirror.position.x = -100.01;
    leftMirror.rotation.y = Math.PI / 2;
    scene.add(leftMirror);

    material1 = new THREE.MeshLambertMaterial({
        color: '#c9cdd1',
        transparent: true,
        opacity: 0.65,
        // roughness: 0.05,
        // metalness: 0.5,
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/testTexture.jpeg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(10, 12);
            }
        ),
    });

    mesh = new THREE.Mesh(geometry, material1);
    mesh.name = "leftWall";
    mesh.position.y = 10;
    mesh.position.x = -100;
    mesh.rotation.y = -Math.PI / 2;
    wallLeft = mesh;

    scene.add(wallLeft);

    const box = new THREE.Box3().setFromObject(mesh);

    //setup orbit controller
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 25;
    controls.maxDistance = 80;

    controls.minPolarAngle = Math.PI / 3.5; // radians
    controls.maxPolarAngle = (2 * Math.PI) / 3.4;
    controls.reset();

    controls.update();

    renderer.setAnimationLoop(render);

    //for responsiveness
    window.addEventListener("resize", onWindowResize);

    var mouseIsDown = false;
    var idTimeout;

    // window.addEventListener('click', () => {
    //     alert('siam')
    // })
    document.addEventListener("pointerdown", function () {
        mouseIsDown = true;
        idTimeout = setTimeout(function () {
            if (mouseIsDown) {
                checkDrag = true;
                return 0;
            }
        }, 200);

        checkDrag = false;
    });

    document.addEventListener("pointerup", function () {
        clearTimeout(idTimeout);
        mouseIsDown = false;
    });

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
    // // wallDown.visible = false;
    // cubeCamera1.position.copy(wallDown.position);
    // cubeCamera1.update(renderer, scene);
    // // wallDown.visible = true;

    // cubeCamera2.position.copy(wallLeft.position);
    // cubeCamera2.update(renderer, scene);

    // cubeCamera3.position.set(100, 0, 35);
    // cubeCamera3.update(renderer, scene);

    // material1.envMap = cubeRenderTarget2.texture;
    // material2.envMap = cubeRenderTarget3.texture;
    // material3.envMap = cubeRenderTarget1.texture;

    if (mixer) mixer.update(clock.getDelta());

    if (p1_flag === false) {
        if (scene.rotation.y < 3.6) {
            console.log(scene.rotation.y);
            scene.rotation.y += 0.05;
        } else if (scene.rotation.y < 3.59) {
            console.log(scene.rotation.y);
            scene.rotation.y -= 0.05;
        }
    }
    if (p2_flag === false) {
        if (scene.rotation.y < 2.349) {
            // console.log(scene.rotation.y);
            scene.rotation.y += 0.05;
        } else if (scene.rotation.y > 2.399) {
            console.log("siam");
            scene.rotation.y -= 0.05;
        }
    }
    if (p3_flag === false) {
        if (scene.rotation.y < 1.35) {
            console.log(scene.rotation.y);
            scene.rotation.y += 0.05;
        } else if (scene.rotation.y > 1.4) {
            console.log(scene.rotation.y);
            scene.rotation.y -= 0.05;
        }
    }
    if (p4_flag === false) {
        if (scene.rotation.y > -0.8) {
            scene.rotation.y -= 0.05;
        }
    }

    const distanceX = camera.position.distanceTo(controls.target);
    let px = (80 - distanceX) / 100;

    // console.log(distanceX);
    if (distanceX < 48) {
        controls.minPolarAngle = 0; // radians
        controls.maxPolarAngle = (2 * Math.PI) / 3.4;
    } else if (distanceX < 65) {
        controls.minPolarAngle = 0.7;
    } else {
        controls.minPolarAngle = Math.PI / 3.5; // radians
        controls.maxPolarAngle = (2 * Math.PI) / 3.4;
    }

    renderer.render(scene, camera);
}

init();
render();
