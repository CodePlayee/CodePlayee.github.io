const date1 = new Date(2019, 9, 22);
const date2 = new Date();
const timesDiff = Math.abs(date1.getTime() - date2.getTime());
const diffDays = Math.ceil(timesDiff / (1000 * 60 * 60 * 24)); //向上取整
const daysDom = document.querySelector("#title");
daysDom.innerHTML = "A page for Sherry by Gorden\n" + diffDays + "days";

const cvs = document.querySelector("#heartCvs");
const scene2 = new THREE.Scene();
scene2.background = new THREE.Color("rgb(255, 247, 240)");

const camera2 = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera2.position.z = 18;

addLight(scene2);

const renderer2 = new THREE.WebGLRenderer({ canvas: cvs, antialias: true });
resizeRenderToDispalySize(renderer2);

const mesh = addHeart();

window.onload = function() {
  requestAnimationFrame(render);
};

function resizeRenderToDispalySize(renderer2) {
  const cvs = renderer2.domElement;
  const pixelRatio = window.devicePixelRatio; //handling HD-DPI displays
  const width = (cvs.clientWidth * pixelRatio) | 0;
  const height = (cvs.clientHeight * pixelRatio) | 0;
  const needResize = width !== cvs.width || height !== cvs.height;
  if (needResize) {
    renderer2.setSize(width, height, false);
  }
  return needResize;
}

function addLight(scene2) {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene2.add(light);
}

function createMaterial() {
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide
  });
  const hue = Math.random();
  const saturation = 1;
  const luminance = 0.5;
  material.color.setHSL(hue, saturation, luminance);
  return material;
}

function addObject(x, y, obj) {
  // const spread = 15;
  // obj.position.x = x * spread;
  // obj.position.y = y * spread;
  scene2.add(obj);
}

function addSolidGeometry(x, y, geometry) {
  const mesh = new THREE.Mesh(geometry, createMaterial());
  addObject(x, y, mesh);
  return mesh;
}

function addHeart() {
  const shape = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    steps: 2,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 0.6,
    bevelSize: 1,
    bevelSegments: 4
  };

  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
  const heartMesh = addSolidGeometry(-2, 1, geometry);
  return heartMesh;
}

function render(time) {
  time *= 0.001;
  if (resizeRenderToDispalySize(renderer2)) {
    const cvs = renderer2.domElement;
    camera2.aspect = cvs.clientWidth / cvs.clientHeight;
    camera2.updateProjectionMatrix();
  }
  const rot = time * 0.3;
  mesh.rotation.x = rot;
  mesh.rotation.y = rot;

  renderer2.render(scene2, camera2);
  requestAnimationFrame(render);
}
