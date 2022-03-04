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
    spotLight2;

const clock = new THREE.Clock();

let link = "asset/home/testRoom.glb";
const clickHandler = (e) => {
    
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);

    var intersects = rayCast.intersectObjects(scene.children);
    

    if (intersects[intersects.length - 1].object.name === "roof") {
        document.querySelector(".wrapperForselling").style.right = "0";
        document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
    } 
    else if (
        intersects[intersects.length - 1].object.name === "rightWall" ||
        intersects[intersects.length - 1].object.name === "leftWall"
    ) {
        document.querySelector(".wrapper").style.right = "0";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
    } else if (intersects[intersects.length - 1].object.name === "floor") {
        document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "0";
    } else {
        document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
    }

    textureLink = intersects[intersects.length - 1].object.material.map;

    if (intersects.length > 0) {
        if (INTERSECTED != intersects[intersects.length - 1].object) {
            INTERSECTED = intersects[intersects.length - 1].object;
        }
    }
};

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


//color
document.getElementById("favcolor").addEventListener("change", () => {
    INTERSECTED.material.color.set(document.getElementById("favcolor").value);
    document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
});

let changeTexture = (textureLink) => {
    let x = new THREE.TextureLoader().load(textureLink, function (texture) {
        
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(10, 12);

    });
    INTERSECTED.material.map = x;
    document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
};
let changeTextureAngel = (textureLink) => {
    INTERSECTED.material.map.rotation = THREE.Math.degToRad(angel);
    document.querySelector(".wrapper").style.right = "-100%";
        document.querySelector(".wrapperForselling").style.right = "-100%";
        document.querySelector(".wrapperForFloor").style.right = "-100%";
   
};

document.getElementById("t1").addEventListener("click", () => {
    textureLink =
    './texture/wd.jpeg';
    changeTexture(textureLink);
});
document.getElementById("t2").addEventListener("click", () => {
    textureLink = './texture/wp1.jpeg';
    changeTexture(textureLink);
});

//floor texture change event
document.getElementById("t1Floor").addEventListener("click", () => {
    textureLink = "./texture/floort1.jpeg";
    changeTexture(textureLink);
});
document.getElementById("t2Floor").addEventListener("click", () => {
    textureLink = "./texture/floort2.jpeg";
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

//angle for floor
document.getElementById("0f").addEventListener("click", () => {
    angel = 45;
    changeTextureAngel(textureLink);
});

document.getElementById("45f").addEventListener("click", () => {
    angel = 45;
    changeTextureAngel(textureLink);
});
document.getElementById("90f").addEventListener("click", () => {
    angel = 90;
    changeTextureAngel(textureLink);
});
document.getElementById("135f").addEventListener("click", () => {
    angel = 135;
    changeTextureAngel(textureLink);
});
document.getElementById("180f").addEventListener("click", () => {
    angel = 180;
    changeTextureAngel(textureLink);
});

//scene rotation
let p1_flag, p2_flag, p3_flag, p4_flag;
document.getElementById("p1").addEventListener("click", () => {
    controls.target.set(0, 0, 0);
    p1_flag = false;
    p2_flag = true;
    p3_flag = true;
    p4_flag = true;
});
document.getElementById("p2").addEventListener("click", () => {
    p1_flag = true;
    p2_flag = false;
    p3_flag = true;
    p4_flag = true;
});
document.getElementById("p3").addEventListener("click", () => {
    p1_flag = true;
    p2_flag = true;
    p3_flag = false;
    p4_flag = true;
});
document.getElementById("p4").addEventListener("click", () => {
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

    //create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color("skyblue");

    //set resderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        canvas: canvReference,
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
    camera.position.set(0, 0, 80);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.setSize(window.innerWidth, window.innerHeight, false);

    //setup light
    let light = new THREE.AmbientLight(0xffffff, 0.4);

    scene.add(light);

    let DirectionalLightbt = new THREE.DirectionalLight(0xffffff, 0.3);
    DirectionalLightbt.position.set(90, 0, 0);

    scene.add(DirectionalLightbt);

    let DirectionalLightside = new THREE.DirectionalLight(0xffffff, 0.4);
    DirectionalLightside.position.set(-90, 0, 0);

    scene.add(DirectionalLightside);

    let DirectionalLightside2 = new THREE.DirectionalLight(0xffffff, 1);
    DirectionalLightside2.position.set(0, 0, 80);

    scene.add(DirectionalLightside2);

    let DirectionalLightside3 = new THREE.DirectionalLight(0xffffff, 0.4);
    DirectionalLightside3.position.set(0, 0, -80);

    scene.add(DirectionalLightside3);

    let DirectionalLightside4 = new THREE.DirectionalLight(0xffffff, 0.5);
    DirectionalLightside4.position.set(0, -30, 0);

    scene.add(DirectionalLightside4);

    let DirectionalLightside5 = new THREE.DirectionalLight(0xffffff, 0.5);
    DirectionalLightside5.position.set(0, 30, 0);

    scene.add(DirectionalLightside5);

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

    let mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
        })
    );

    mesh.position.y = 50;
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = "roof";
    scene.add(mesh);

    geometry = new THREE.BoxGeometry(200, 200, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load(
                "/texture/fd.jpeg",
                (texture) => {
                    //side wall
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.offset.set(0, 0);
                    texture.repeat.set(10, 12);
                }
            ),
        })
    );
    mesh.position.y = -30;
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = "floor";
    scene.add(mesh);

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

    scene.add(mesh);

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load(
                "/texture/wallTextureSide.jpeg",
                (texture) => {
                    //side wall
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.offset.set(0, 0);
                    texture.repeat.set(10, 12);
                }
            ),
        })
    );
    mesh.name = "rightWall";
    mesh.position.y = 10;
    mesh.position.x = 100;
    mesh.rotation.y = -Math.PI / 2;

    scene.add(mesh);

    geometry = new THREE.BoxGeometry(200, 80, 0.1);

    mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            color: "white",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load(
                "/texture/wallTextureSide.jpeg",
                (texture) => {
                    //side wall
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.offset.set(0, 0);
                    texture.repeat.set(10, 12);
                }
            ),
        })
    );
    mesh.name = "leftWall";
    mesh.position.y = 10;
    mesh.position.x = -100;
    mesh.rotation.y = -Math.PI / 2;

    scene.add(mesh);

    const box = new THREE.Box3().setFromObject(mesh);

    const boxSize = box.getSize(new THREE.Vector3()).length();
    const boxCenter = box.getCenter(new THREE.Vector3());
    const halfSizeToFitOnScreen = boxSize * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    //setup orbit controller
    controls = new OrbitControls(camera, renderer.domElement);

    controls.update();

    renderer.setAnimationLoop(render);

    //for responsiveness
    window.addEventListener("resize", onWindowResize);
    var mouseIsDown = false;
    var idTimeout;

    // document.getElementById('siam').addEventListener('click', () => {
    //     alert('siam')
    // })
    document.getElementById('siam').addEventListener('mousedown', function() {
        
    mouseIsDown = true;
    idTimeout = setTimeout(function() {
        if(mouseIsDown) {
            alert('siam')
        }
    }, 20);
    });

    window.addEventListener('mouseup', function() {
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

    // scene.rotation.y += 0.005;

    // console.log(scene.rotation.y);

    renderer.render(scene, camera);
}

init();
render();
