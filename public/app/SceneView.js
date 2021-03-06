var SceneView = function() {
    //init
    if (!Detector.webgl) Detector.addGetWebGLMessage();
    var renderer;
    var c1_canvas_div;
    var scene, camera;
    var viewSize = new THREE.Vector2(window.innerWidth, window.innerHeight);
    var windowHalfX = viewSize.x / 2;
    var windowHalfY = viewSize.y / 2;
    var stat, stat_div;

    function addStat() {
        stat_div = document.getElementById('c_stat');
        stat = new Stats();
        stat.dom.style.position = 'relative';
        stat_div.appendChild(stat.dom);
    }
    addStat();

    function init() {
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortObjects = false;
        c1_canvas_div = document.getElementById('viewBox');
        c1_canvas_div.appendChild(renderer.domElement);
        renderer.setClearColor(0xffffff);
        //scene
        scene = new THREE.Scene();
        //scene.fog = new THREE.Fog(0xff0000, 0, 2000);
        universeScene = new THREE.Scene();
        //camera
        camera = new THREE.PerspectiveCamera(30, viewSize.x / viewSize.y, 1, 2000);
        camera.position.set(0, 0, 100);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        orbit = new THREE.OrbitControls(camera, renderer.domElement);
        //light
        var ambient = new THREE.AmbientLight(0xffffff);
        orbit.target.set(0.0, 0.0, 0.0);
        //scene.add(ambient);
        var plight = new THREE.PointLight(0xffffff);
        plight.position.set(0, 0, 0);
        scene.add(plight);

        var geo = new THREE.SphereGeometry(200, 200, 100);
        var loader = new THREE.TextureLoader();
        var mat = new THREE.MeshBasicMaterial();
        loader.load("test.jpg", function(tex) {
            mat.map = tex;
            mat.needsUpdate = true;
            mat.side = THREE.BackSide;
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
        stat.begin();
        renderer.render(scene, camera);
        stat.end();
    }
    //show
}();