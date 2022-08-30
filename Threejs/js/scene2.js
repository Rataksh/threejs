var scene3d2 = document.getElementById("scene3d2");
var CANVAS_WIDTH = 300;
var CANVAS_HEIGHT = 330;

// SCENE

scene = new THREE.Scene();

// CAMERA

camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(scene.position);

// RENDERER

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000, 1.0);
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

// GEOMETRY & MATERIALS

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// LIGHT

var spot1 = new THREE.SpotLight(0xffffff);
spot1.position.set(10, 100, -50);
scene.add(spot1);

// FINISH SCENE SETUP

// document.body.appendChild(scene3d.domElement);
scene3d2.appendChild(renderer.domElement);
renderer.render(scene, camera);
