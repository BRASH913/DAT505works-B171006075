var container, stats;
var camera, scene, raycaster, renderer;

init();
render();


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
    camera.position.y+=400;
    camera.position.z+=1000;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
/////////////////////////
function color1(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("obj/color1.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("obj/color1.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  mesh.rotation.y-=0.2;
  });
});
}
///////////////////////////////
function color2(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("obj/color2.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("obj/color2.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  mesh.rotation.y-=0.2;
  });
});
}
///////////////////////////////
function color3(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("obj/color3.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("obj/color3.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  mesh.rotation.y-=0.2;
  });
});
}
///////////////////////////
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
  document.getElementById("changeRed1").addEventListener("click",color1);
  document.getElementById("changeRed2").addEventListener("click",color2);
  document.getElementById("changeRed3").addEventListener("click",color3);
}
