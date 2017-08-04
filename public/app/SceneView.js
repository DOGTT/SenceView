var SceneView = function() {
    //init

    var renderer;
    var c1_canvas_div;
    var scene, camera;
    var viewSize = new THREE.Vector2(window.innerWidth, window.innerHeight);
    var windowHalfX = viewSize.x / 2;
    var windowHalfY = viewSize.y / 2;

    function init() {
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortObjects = false;
        c1_canvas_div = document.getElementById('viewBox');
        c1_canvas_div.appendChild(renderer.domElement);

        //scene
        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xff0000, 0, 2000);
        universeScene = new THREE.Scene();
        //camera
        camera = new THREE.PerspectiveCamera(45, viewSize.x / viewSize.y, 1, 2000);
        camera.position.set(0, 0, 100);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        orbit = new THREE.OrbitControls(camera, renderer.domElement);
        //light
        var ambient = new THREE.AmbientLight(0xcccccc);
        orbit.target.set(0.0, 0.0, 0.0);
        scene.add(ambient);

        var geo = new THREE.SphereGeometry(200, 200);
        var mat = new THREE.MeshPhongMaterial({
            color: 0xffff00,
            wireframe: true
        });
        var ma = new THREE.Mesh(geo, mat);
        scene.add(ma);
    }
    init();
    animate();

    function animate() {
        requestAnimationFrame(animate);
        render();
        orbit.update();
        //stats.update();
    }
    //rander
    function render() {
        renderer.render(scene, camera);
    }
    //show
}();