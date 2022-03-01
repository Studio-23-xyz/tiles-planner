//importing necessary things
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "./files/Loader.js";
import { FBXLoader } from "./files/Loader.js";
import { OBJLoader } from "./files/Loader.js";

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

let link = "asset/new3/Isometric Room.gltf";
const clickHandler = (e) => {
    
    //console.log(e.clientX, e.clientY);
    
   
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);

    var intersects = rayCast.intersectObjects( scene.children );
    console.log(intersects);
     
     if ( intersects.length > 0 ) {

      if ( INTERSECTED != intersects[ intersects.length -1 ].object ) {
        INTERSECTED = intersects[ intersects.length -1 ].object;
      }

    }
    
};
let changeTexture = (textureLink) => {
    console.log(INTERSECTED);
    if(INTERSECTED.material.map !== null)
    // castMaterial[1].object.material.map = new THREE.TextureLoader().load('./Paint_Texture.jpg');
    {
        INTERSECTED.material.map = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0.7, 0 );
            // texture.repeat.set( 1, 1 );
            texture.repeat = new THREE.Vector2(1 , 1);
            
        
        } );
    }
    else {
        
        INTERSECTED.material.color.set('white'); 
        INTERSECTED.material.needsUpdate  = true;
        // INTERSECTED.material.alpha = 0.5;
        INTERSECTED.material.map = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 1, 1 );
            
           
            
        
        } );
        INTERSECTED.material.alphaMap = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 2, 2 );
        
        } );
        
    }
}
let changeTextureAngel = (textureLink) => {
    console.log(INTERSECTED);
    if(INTERSECTED.material.map !== null)
    // castMaterial[1].object.material.map = new THREE.TextureLoader().load('./Paint_Texture.jpg');
    {
        INTERSECTED.material.map = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 1, 1 );
            
            texture.center.set(.5, .5);
            texture.rotation = THREE.Math.degToRad(angel);
        
        } );
    }
    else {
        
        INTERSECTED.material.color.set('red'); 
        INTERSECTED.material.needsUpdate  = true;
        // INTERSECTED.material.alpha = 0.5;
        INTERSECTED.material.map = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 1, 1 );
            
           
            
        
        } );
        INTERSECTED.material.alphaMap = new THREE.TextureLoader().load( textureLink, function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set( 0, 0 );
            texture.repeat.set( 2, 2 );
        
        } );
        
    }
}

document.getElementById('t1').addEventListener('click', () => {
    textureLink = "https://threejs.org/examples/textures/758px-Canestra_di_frutta_(Caravaggio).jpg";
    changeTexture(textureLink);
    
});
document.getElementById('t2').addEventListener('click', () => {
    textureLink = "./Paint_Texture.jpg";
    changeTexture(textureLink); 
});

document.getElementById('0').addEventListener('click', () => {
    angel = 0; 
    changeTextureAngel(textureLink); 
});
document.getElementById('45').addEventListener('click', () => {
    angel = 45; 
    changeTextureAngel(textureLink); 
});
document.getElementById('90').addEventListener('click', () => {
    angel = 90; 
    changeTextureAngel(textureLink); 
});
document.getElementById('135').addEventListener('click', () => {
    angel = 135;
    changeTextureAngel(textureLink);  
});
document.getElementById('180').addEventListener('click', () => {
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

    renderer.setSize(window.innerWidth , window.innerHeight, false);
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

        

    

    GLTFloader.load(link, function (gltf) {
        obj = gltf.scene;
        console.log(gltf);
        var bbox = new THREE.Box3().setFromObject(obj);
        var size = bbox.getSize(new THREE.Vector3());

        var maxAxis = Math.max(size.x, size.y, size.z);
     
        obj.scale.multiplyScalar(11 / maxAxis);

        // obj.traverse(child => {
        //     if (child.material ) {
        //       child.material.map = new THREE.TextureLoader().load('./Wrinkle-Paper-Textures-2-Deeezy-4.jpeg');
        //     console.log(child);
        //     }
        //   });

          if (gltf.animations.length) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            mixer.clipAction(gltf.animations[0]).play();
        }

        //   console.log('ssss');

        scene.add(obj);
    });

    
 

    //setup orbit controller
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    // controls.autoRotate = true;
    controls.screenSpacePanning = false;
    controls.update();

    renderer.setAnimationLoop(render);

    //for responsiveness
    window.addEventListener("resize", onWindowResize);
    document.addEventListener("click", clickHandler);
}

function onWindowResize() {
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth , window.innerHeight, false);

    // renderer.setSize(window.innerWidth, window.innerHeight, false);
    render();
}

function render() {
    if (mixer) mixer.update(clock.getDelta());

    controls.update();
    renderer.render(scene, camera);
}


init();
render();

