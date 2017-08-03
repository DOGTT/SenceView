var SceneView = function() {
    //init
    //rander
    var renderer;
    var c1_canvas_div;

    function init() {
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortObjects = false;
        c1_canvas_div = document.getElementById('viewBox');
        c1_canvas_div.appendChild(renderer.domElement);
    }
    init();
    //show
}();