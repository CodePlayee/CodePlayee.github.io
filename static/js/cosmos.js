setTimeout(() => {
  const canvas = document.querySelector("#cosmosCvs");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(255, 247, 240)");

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 40;
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  resizeRenderToDispalySize(renderer);

  //add point light
  const pointLight = new THREE.PointLight(0xffffff, 3);
  scene.add(pointLight);

  //an array of objects whose rotation to update
  const objects = [];
  //use just one sphere for everything
  const radius = 1;
  const widthSegments = 16;
  const heightSegments = 16;
  const sphereGeometry = new THREE.SphereBufferGeometry(
    radius,
    widthSegments,
    heightSegments
  );

  //the empty scene graph node as parent both of the sun and the earth.
  //it has no material or geometry, just represents a local space.
  const solarSystem = new THREE.Object3D();
  scene.add(solarSystem);
  objects.push(solarSystem);

  //sun
  const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xff8000 });
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);

  sunMesh.scale.set(6, 6, 6); //make the sun large
  solarSystem.add(sunMesh);
  objects.push(sunMesh);

  const disEarthSun = 26; //the distance between earth and sun
  const earthObit = new THREE.Object3D();
  earthObit.position.set(-disEarthSun, 0, 0);
  solarSystem.add(earthObit);
  objects.push(earthObit);

  const earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x2233ff,
    emissive: 0x112244
  });
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthMesh.scale.set(3, 3, 3);
  earthObit.add(earthMesh);
  objects.push(earthMesh);

  const disMoonEarth = 6;
  const moonObit = new THREE.Object3D();
  moonObit.position.set(-disMoonEarth, 0, 0);
  earthObit.add(moonObit);

  const moonMaterial = new THREE.MeshPhongMaterial({
    color: 0x88888,
    emissive: 0x222222
  });
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
  moonMesh.scale.set(1.5, 1.5, 1.5);
  moonObit.add(moonMesh);
  objects.push(moonMesh);

  const animate = function(t) {
    t *= 0.001;
    if (resizeRenderToDispalySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    objects.forEach((obj, idx) => {
      obj.rotation.z = t;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };

  animate();
}, 0);
