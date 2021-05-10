//wave//
var offset = 0;
var strum = 1;

//sound//
var mySound;
var mySound2;

//button//
var button;

//race state//
var raceState = 0;

// wake & boat speed//
let dot = { x: 300, y: 0 }
let speed1 = 2.5
let speed2 = 3.25
let speed3 = 3
let leftAnchor = []
let rightAnchor = [] 

/* // boat1// - these can all be deleted
let b1 = { x: -1000, y: -100, w: 750, h: 100 }
let force = 3

// boat2//
let b2 = { x: -1000, y: -100, w: 75, h: 100 }

// boat3//
let b3 = { x: -1000, y: -100, w: 75, h: 100 } */


//this is where the PINK boat1 is generated//
var boat1 = new Boat(-600, 100, '#E60C76', 'right', speed1)
// right is our boat direction & can be changed & forward only 

//this is where the ORANGE boat2 is generated//
var boat2 = new Boat(-600, 280, '#eb8034', 'up', speed2)
// right is our boat direction & can be changed & forward only

//this is where the PURPLE boat3 is generated//
var boat3 = new Boat(-600, 450, '#7333b8', 'up', speed3)
//  right is our boat direction & can be changed & forward only */

//Create Race State//
/* let raceState = {
  //0 no boats no music, 
  //1 race start music begins, boats not on screen, not moving
  //2 music done, boats get on screen & moving
  phase: 0,
  currentRaceIndex: 0 //start the race
};

let raceBegin = []; // wave starts moving once button is pressed
let startGun = new StartSound // starting gun sound */

//PREload music - Start SOUND plays each time on play and restart- row your boat is continuous//
function preload() {
  soundFormats('wav');
  mySound2 = loadSound('sound/TDguitar_Pamela2.0.m4a');
  mySound = loadSound('sound/countdown.wav');
}
function setup() {
  createCanvas(1800, 600);
  background('#b0f0f7');
  mySound2.play();
  mySound.setVolume(0.3);
  mySound2.setVolume(0.1);;

  //BEGIN PHASE START INFO//-
    button = createButton('START');
   /*  console.log(button) */
    button.position((width / 2) - (button.width/2), height /2 - (button.height /2));
/* button.mousePressed(startGun);  */
    mySound.setVolume(0.1);
    mySound.play(); 

/* button.mousePressed(togglePlaying); */
    button.mousePressed(changeRaceState);
    boat1.display(); 
    boat2.display();
    boat3.display();  

}

function loaded() {

}

function changeRaceState() { //button can only change to 0 or 1 state or racing - add draw section the timing 1-2
//  get current time, and then if time is past 5 seconds for state 1 to state 2//

  if (raceState == 0){
    raceState = 1; 
    mySound.play();
    mySound.setVolume(0.3);
    button.html('Restart')
  }
  else if (raceState == 1){
    raceState = 0;
    button.html('START');

    //this is redrawing for restart only//
    boat1 = new Boat(-500, 100, '#E60C76', 'right', speed1)
    // right is our boat direction & can be changed & forward only 

    //this is where the ORANGE boat2 is generated//
    boat2 = new Boat(-500, 280, '#eb8034', 'up', speed2)
    // right is our boat direction & can be changed & forward only

    //this is where the PURPLE boat3 is generated//
    boat3 = new Boat(-500, 450, '#7333b8', 'up', speed3)
//  right is our boat direction & can be changed & forward only */

    background('#b0f0f7');
  }
} 

function draw() { 
  
  stroke('#006699');
  //SAVE these colors for drawing all the blues
  // color('#b0f0f7'); light blue
  // color('#006699'); water blue
  // color('#092054;'); dark blue

  noFill();
 
  //wave//
  beginShape();
  vertex(0, height);
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 0, 800);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(); 

  offset += 0.05;

  if (raceState == 0) {
    return;
  }
  else if (raceState == 1) { //show the BOATS when race has started//
    boat1.display();
    boat1.update();
    boat2.display();
    boat2.update();
    boat3.display();
    boat3.update();
  }

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

