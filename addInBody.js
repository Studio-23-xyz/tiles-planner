document.getElementById("bs__root").innerHTML = `


<div id="mainBody">
<canvas id="myCanvasElement"></canvas>

<div class="closebtn">

</div>
<!-- <button id="arrowBtn1"><img src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-arrow-arrow-flatarticons-blue-flatarticons-6.png"/></button> -->
<div class="wrapper">
    <button id="arrowBtn1"><img height="40px" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-arrow-arrow-flatarticons-blue-flatarticons-6.png"/></button>
    <div class="angel">
        <p>Laying angle:</p> 
        <p class="angelUnit zero" id="0">&nbsp; 0&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="45">45&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="90">90&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="135">135&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="180">180&#176;</p>&nbsp;&nbsp;
    </div>

   
    <p class="headingForPopUp">Select Tiles: </p> 

    <div class="img">
        <div class="tilesWrapper" id="t1">
            <img src='./texture/Inkedti2.jpg' alt="t1" height="40px" width="100px" >
            <div style="display: block; margin: 0;">
                <p class="infoTils">1001 Border 7</p>
                <p class="infoTils">Size: 250mm x 75mm</p>
                <p class="infoTils">Finish: glossy</p>
            </div>
        </div>
        <br>
        <div class="tilesWrapper" id="t2">
            <img src='./texture/q.jpg' alt="t1" height="50px" width="100px">
            <div style="display: block; margin: 0;">
                <p class="infoTils">1002 Border 7</p>
                <p class="infoTils">Size: 250mm x 75mm</p>
                <p class="infoTils">Finish: glossy</p>
            </div>
        </div> <br>
       
    </div>

</div>
<div class="wrapperForFloor">
    <button id="arrowBtn2"><img height="40px" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-arrow-arrow-flatarticons-blue-flatarticons-6.png"/></button>
    <div class="angel">
        <p>Laying angle:</p>
        <p class="angelUnit zero" id="0f">&nbsp;0&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="45f">45&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="90f">90&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="135f">135&#176;</p>&nbsp;&nbsp;
        <p class="angelUnit" id="180f">180&#176;</p>&nbsp;&nbsp;
    </div>

    <p class="headingForPopUp">Select Tiles: </p>
    <div class="img">
        <div class="tilesWrapper" id="t1Floor">
            <img src='./texture/fti2.jpg' alt="t1" height="50px" width="100px" >
            <div style="display: block; margin: 0;">
                <p class="infoTils">1001 Border 7</p>
                <p class="infoTils">Size: 250mm x 75mm</p>
                <p class="infoTils">Finish: glossy</p>
            </div>
        </div> <br>
        <div class="tilesWrapper" id="t2Floor">
            <img src='./texture/fti1.jpg' alt="t1" height="50px" width="100px" >
            <div style="display: block; margin: 0;">
                <p class="infoTils">1002 Border 7</p>
                <p class="infoTils">Size: 250mm x 75mm</p>
                <p class="infoTils">Finish: glossy</p>
            </div>
        </div> <br>
        
    </div>

</div>
<!-- <button id="siam">siam</button> -->
<div class="wrapperForselling">
    Ceiling Color 
    &nbsp; <input type="color" id="favcolor" name="favcolor" value="#ff0000">
    &nbsp; <button class="cancelBtn" id="cancel1">x</button>

</div>

<div class="functions">
    <div class="modelAngel">
        <img class="angelImg" src='./texture/views/p1.png' alt="p1" height="50px" width="70px" id="p1">
        <img class="angelImg" src='./texture/views/p2.png' alt="p2" height="50px" width="70px" id="p2">
        <img class="angelImg" src='./texture/views/p3.png' alt="p3" height="50px" width="70px" id="p3">
        <img class="angelImg" src='./texture/views/p4.png' alt="p4" height="50px" width="70px" id="p4">
    </div>

    <div class="snap">
        <div class="downloadCanvas" id="pdfSave"><img src="https://img.icons8.com/ios/50/ffffff/pdf--v1.png"
                height="20px" /></div>
        <div class="downloadCanvas" id="imgSave"><img
                src="https://img.icons8.com/wired/64/ffffff/screenshot.png" height="20px" /></div>
    </div>

</div>
`

let style = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;300&family=Poppins:wght@200&display=swap');

*{
    margin: 0;
    padding: 0;
}

body{
    margin: 0;
    overflow: hidden;
    width: 100%;
}

.wrapper, .wrapperForFloor{
    position: absolute;
    background: rgba(255, 255, 255, 0.97);
    font-size: 25px;
    top: 5%;
    display: none;
    transition: .5s ease;
    max-height: 100vh;
}
.headingForPopUp{
    padding: 10px;
}
.tilesWrapper{
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
}
.zero{
    background: rgba(0, 0, 0, 0.5);
}
.angelUnit{
    border-radius: 2px;
}

#arrowBtn1{
    border: none;
    position: absolute;
    left: -40px;
    z-index: 1111111111;
    cursor: pointer;
    background: white;
    border-radius: 2px;
}
.rotation{
    transform: rotate(-180deg);
}
#arrowBtn2{
    position: absolute;
    left: -40px;
    border: none;
    z-index: 1111111111;
    background: white;
    cursor: pointer;
    border-radius: 2px;
}
.wrapperForselling{
    
    display: none;
    position: absolute;
    /* display: flex; */
    align-items: center;
    padding: 5px 30px 5px 30px;

    background: white;
    font-size: 25px;
    top: 5%;
    transition: .5s ease;
}
/* .wrapperForselling{
    left: 0;
    width: 30%;
} */

.img{
    z-index: 111111;
    cursor: pointer;
    display: block;
    padding-left: 10px;
    overflow: scroll;
    max-height: 90vh;
}
.angel{
    display: flex;
    z-index: 111111;
    cursor: pointer;
    padding: 10px;
}
.functions{
    display: flex;
    position: absolute;
    z-index: 11111;
    bottom: 0;
    left: 4%;
    justify-content: space-between;
    width: 90%;
}
.angelImg{
    border-radius: 10px;
    margin: 2px;
    cursor: pointer;
}
.snap{
    display: flex;
    margin: 0;
    margin-top: 20px;
    
}
.downloadCanvas{
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
    height: 20px;
    padding: 10px;
    margin-left: 3px;
    border-start-end-radius: 5px;
    border-start-start-radius: 5px;
    transition: .5s ease;
}

.downloadCanvas:hover{
    background: rgba(0, 0, 0, 0.9);
}

#loaderparent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 111111;
}

.loader {
    
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    /* -webkit-animation: spin 2s linear infinite; */
     /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
      
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

.cancelBtn{
    margin: 0 20px;
    border: none;
    background: none;
    font-weight: bold;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: .5s ease;
}
.cancelBtn:hover{
    color: rgba(0, 0, 0, 0.5);
}

.infoTils{
    font-size: 15px;
    padding: 0 20px 0 20px ;
}
`

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);


/////////////////three js .........////////////////////////


//importing necessary things
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/jsm/loaders/GLTFLoader.js";
import { Reflector } from "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/jsm/objects/Reflector.js";
//console.log(ARButton);
let composer, renderPass, saoPass;

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
    textureLink = null,
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
let wallName;
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

    // textureLink = intersects[intersects.length - 1].object.material.map;

    
    if (intersects.length > 0) {
        if (INTERSECTED != intersects[intersects.length - 1].object) {
            INTERSECTED = intersects[intersects.length - 1].object;
        }
    }
    wallName = INTERSECTED.name;
    // console.log(wallName);

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
let checkTextureChangeForSide = false;
let checkTextureChangeForFloor = false;

let changeTexture = (textureLink) => {
    let x = new THREE.TextureLoader().load(textureLink, function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(16, 12);
        // texture.anisotropy = 46;
    });
    INTERSECTED.material.map = x;
    INTERSECTED.material.opacity = 0.6;
    
};
let changeTextureAngel = (textureLink, wall) => {

    if(angel == 0 && wall === 'sideWall') {
        INTERSECTED.material.map.repeat.set(16, 12);
    }
    else if(angel == 45 && wall === 'sideWall' ) {
        INTERSECTED.material.map.repeat.set(12, 16);
    }
    else if(angel == 90 && wall === 'sideWall' ) {
        INTERSECTED.material.map.repeat.set(8, 32);
    }
    else if(angel == 135 && wall === 'sideWall' ) {
        INTERSECTED.material.map.repeat.set(12, 16);
    }
    else if(angel == 180 && wall === 'sideWall' ) {
        INTERSECTED.material.map.repeat.set(16, 12);
    }
    INTERSECTED.material.map.rotation = THREE.Math.degToRad(angel);
    
};

let firstClickCheck = true;

document.getElementById("t1").addEventListener("click", () => {
    document.getElementById("0").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'none';


    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    textureLink = "./texture/Inkedti2.jpg";
    changeTexture(textureLink);
});
document.getElementById("t2").addEventListener("click", () => {
    document.getElementById("0").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'none';


    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    textureLink = "./texture/q.jpg";
    changeTexture(textureLink);
});

//floor texture change event
document.getElementById("t1Floor").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'none';
    
    
    
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    textureLink = "./texture/fti2.jpg";
    changeTexture(textureLink);
});
document.getElementById("t2Floor").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'none';
    
    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    textureLink = "./texture/fti1.jpg";
    changeTexture(textureLink);
});

document.getElementById("0").addEventListener("click", () => {
    document.getElementById("0").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'none';

    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 0;
    changeTextureAngel(textureLink, 'sideWall');
});

document.getElementById("45").addEventListener("click", () => {
    document.getElementById("0").style.background = 'none';
    document.getElementById("45").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'none';

    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 45;
    changeTextureAngel(textureLink, 'sideWall');
});
document.getElementById("90").addEventListener("click", () => {
    document.getElementById("0").style.background = 'none';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'none';

    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 90;
    changeTextureAngel(textureLink, 'sideWall');
});
document.getElementById("135").addEventListener("click", () => {
    document.getElementById("0").style.background = 'none';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("180").style.background = 'none';

    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 135;
    changeTextureAngel(textureLink, 'sideWall');
});
document.getElementById("180").addEventListener("click", () => {

    document.getElementById("0").style.background = 'none';
    document.getElementById("45").style.background = 'none';
    document.getElementById("90").style.background = 'none';
    document.getElementById("135").style.background = 'none';
    document.getElementById("180").style.background = 'rgba(0, 0, 0, 0.5)';

    document.querySelector(".wrapper").style.right = "-422px";
    document.getElementById("arrowBtn1").classList.add("rotation");
    arrowCheck1 = false;
    arrowCheck2 = true;
    angel = 180;
    changeTextureAngel(textureLink, 'sideWall');
});

//angle for floor
document.getElementById("0f").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'none';


    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 0;
    changeTextureAngel(textureLink, 'floor');
});

document.getElementById("45f").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'none';
    document.getElementById("45f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'none';


    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 45;
    changeTextureAngel(textureLink);
});
document.getElementById("90f").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'none';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'none';

    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 90;
    changeTextureAngel(textureLink);
});
document.getElementById("135f").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'none';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'rgba(0, 0, 0, 0.5)';
    document.getElementById("180f").style.background = 'none';

    document.querySelector(".wrapperForFloor").style.right = "-422px";
    document.getElementById("arrowBtn2").classList.add("rotation");
    arrowCheck2 = false;
    arrowCheck1 = true;
    angel = 135;
    changeTextureAngel(textureLink);
});
document.getElementById("180f").addEventListener("click", () => {
    document.getElementById("0f").style.background = 'none';
    document.getElementById("45f").style.background = 'none';
    document.getElementById("90f").style.background = 'none';
    document.getElementById("135f").style.background = 'none';
    document.getElementById("180f").style.background = 'rgba(0, 0, 0, 0.5)';

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

    // window.addEventListener("load", () => {
    //     setInterval(() => {
    //         document.getElementById("loaderparent").style.display = "none";
    //         document.getElementById("overlay").style.display = "none";
    //     }, 500);
    // });

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


    const pointLight1 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight1.position.set(-45, 13, -56);
    scene.add(pointLight1);

    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.set(45, 13, -56);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 2, 50);
    pointLight2.position.set(0, 0, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1, 80);
    pointLight3.position.set(0, -10, -56);
    scene.add(pointLight3);

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;

    const GLTFloader = new GLTFLoader();   

    GLTFloader.load("asset/bed/scene.gltf", function (gltf) {
        obj = gltf.scene;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(0, -30, -90);
        // obj.rotation.set(0, - Math.PI / 2, 0);

        obj.scale.multiplyScalar(90 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });
    GLTFloader.load("asset/tv/scene.gltf", function (gltf) {
        obj = gltf.scene;
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(0, -12, -90);
        // obj.rotation.set(0, Math.PI, 0);

        obj.scale.multiplyScalar(40 / maxAxis);

        //   console.log('ssss');

        scene.add(obj);
    });

    //chair
    GLTFloader.load("asset/home/SheenChair.glb", function (gltf) {
        obj = gltf.scene;
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
        // console.log(obj);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
        // console.log(maxAxis);
        obj.position.set(-99, 0, -25);
        obj.rotation.set(0, -Math.PI, 0);
        

        obj.scale.multiplyScalar(65 / maxAxis);

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
        aoMapIntensity: 0.35,
        aoMap: new THREE.TextureLoader().load("/texture/a.jpg"),
        opacity: 0.65,
        
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/images.jpg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(3, 3);
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
        transparent: true,
        opacity: 0.62,
        aoMapIntensity: 0.3,
        aoMap: new THREE.TextureLoader().load("/texture/a.jpg"),
        // reflectivity: 0.1,
        // roughness: 0.05,
        // metalness: 0.5,
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/tid.jpg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(3, 3);
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
        aoMapIntensity: 0.3,
        aoMap: new THREE.TextureLoader().load("/texture/a.jpg"),
        transparent: true,
        opacity: 0.62,
        // roughness: 0.05,
        // metalness: 0.5,
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(
            "/texture/tid.jpg",
            (texture) => {
                //side wall
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set(0, 0);
                texture.repeat.set(3, 3);
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

    //light 2
    let DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    DirectionalLight.position.set(-10, 0, 0);

    scene.add(DirectionalLight);
    let DirectionalLight2 = new THREE.DirectionalLight(0xffffff, 0.2);
    DirectionalLight2.position.set(10, 0, 0);

    scene.add(DirectionalLight2);

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
            // console.log("siam");
            scene.rotation.y -= 0.05;
        }
    }
    if (p3_flag === false) {
        if (scene.rotation.y < 1.35) {
            // console.log(scene.rotation.y);
            scene.rotation.y += 0.05;
        } else if (scene.rotation.y > 1.4) {
            // console.log(scene.rotation.y);
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
