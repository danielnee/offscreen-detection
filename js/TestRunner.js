function TestRun() {
    var cPosFinder = new PositionFinder();
    //console.log(cPosFinder.FindObjectPosition($("#ebStdBanner0")[0]));
    //console.log(cPosFinder.ComputeInitiallyVisible($("#ebStdBanner0"), $(window)))
    
    // requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

var canvas, context, toggle;

init();
animate();

function init() {

    canvas = document.createElement( 'canvas' );
    canvas.id = "lol"
    canvas.width = 512;
    canvas.height = 512;

    context = canvas.getContext( '2d' );

    document.body.appendChild( canvas );

}

function animate() {
    //window.setTimeout(animate, 1000 / 20);
    requestAnimFrame( animate, document.getElementById('lol') );
    update();

}

var delta;
var lastTime;
var frames;
var totalTime;
var updateTime;
var updateFrames;

lastTime = (new Date()).getTime();
    frames = 0;
    totalTime = 0;
    updateTime = 0;
    updateFrames =0;

function update() {
    var now = (new Date()).getTime();
    delta = now-lastTime;
    lastTime = now;
    totalTime+=delta;
    frames++;
    updateTime+=delta;
    updateFrames++;
    if(updateTime > 1000) {
        console.log("FPS AVG: " + (1000*updateFrames/updateTime));
        updateTime = 0;
        updateFrames =0;
    }

   

    draw();
}


function draw() {

    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 192 + 256;
    var y = Math.cos( time * 0.9 ) * 192 + 256;
    toggle = !toggle;

    context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();

}
    
//        setInterval(function(){
//            console.log(cPosFinder.ComputeCurrentlyVisible($("#ebStdBanner0"), $(window)))
//        }, 500);
}

var cLoader = new JQueryLoader();
cLoader.RunJQueryCode(TestRun)

