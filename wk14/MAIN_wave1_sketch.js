//wave//
var offset = 0;
var strum = 1;

//button//
var button;

// waves//
let dot = { x: 300, y: 0 }
let speed1 = -2.5
let speed2 = -5
let speed3 = -3
let leftAnchor = []
let rightAnchor = []

// boat1//
let b1 = { x: 250, y: -10, w: 75, h: 100 }
let force = 3

// boat2//
let b2 = { x: 250, y: -10, w: 75, h: 100 }

// boat3//
let b3 = { x: 250, y: -10, w: 75, h: 100 }


//this is where the PINK boat1 is generated//
var boat1 = new Boat(620, 160, '#E60C76', 'up', speed1)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only 

//this is where the PURPLE boat2 is generated//
var boat2 = new Boat(820, 380, '#eb8034', 'up', speed2)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

//this is where the GREEN boat3 is generated//
var boat3 = new Boat(1020, 600, '#7333b8', 'up', speed3)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only


//PREload music - NOT WORKING!!!//
/* function preload() {
  soundFormats('wav');
  mySound = loadSound('sound/TD_Pamela2.0-1.m4a'); */

function setup() {
  createCanvas(1800, 600);
  background('#b0f0f7');
  boat1.display();
  boat2.display();
  boat3.display();
/* 
mySound.setVolume(0.1);
  mySound.play();
  button = createButton('PLAY');
  button.mousePressed(togglePlaying); 
}

function loaded() {

}
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html('pause');
  }
  else {
    mySound.pause();
    button.html('play'); */

}  
// Load another JS file - BOAT RACE - NOT WORKING!! 
/* function loadJSON(path, [callback], [errorCallback], [datatype])() {
loadLib("toolkit/Toolkit");
loadLib("toolkit/Viewable");
loadLib("toolkit/Overlay");
}
 */
function draw() { 
  
  stroke('#006699');
  // color('#b0f0f7'); light blue
  // color('#006699'); water blue
  // color('#092054;'); dark blue

  noFill();
 
/*   beginShape();
  vertex(0, height);
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 0, 800);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(); */

  offset += 0.05;
  boat1.display();
  boat1.update();
  boat2.display();
  boat2.update();
  boat3.display();
  boat3.update();
}
//WAVE
class Wave {
  constructor(amp, period, phase){
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }
    calculate(x) {
    
    return
  }
}

