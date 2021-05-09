//wave//
var offset = 0;
var strum = 1;

//sound//
var mySound;

//button//
var button;

// wake & boat speed//
let dot = { x: 300, y: 0 }
let speed1 = -2.5
let speed2 = -5
let speed3 = -3
let leftAnchor = []
let rightAnchor = [] 

// boat1// //where do I move the boats backwards off the canvas? rrrr!!!//
let b1 = { x: -100, y: -100, w: 750, h: 100 }
let force = 3

// boat2//
let b2 = { x: -100, y: -100, w: 75, h: 100 }

// boat3//
let b3 = { x: -100, y: -100, w: 75, h: 100 }


//this is where the PINK boat1 is generated//
var boat1 = new Boat(620, 100, '#E60C76', 'up', speed1)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only 

//this is where the ORANGE boat2 is generated//
var boat2 = new Boat(820, 280, '#eb8034', 'up', speed2)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

//this is where the PURPLE boat3 is generated//
var boat3 = new Boat(1020, 450, '#7333b8', 'up', speed3)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only */

//Create Game State//
let raceState = {
  //0 for initializing
  //1 for push the mouseButton
  //2 end the race
  phase: 0,
  currentRaceIndex: 0 //start the race
};
let race = [
  {phase1: 'phase 1', phase2: 'phase2', phase3: 'phase 3'},
  {phase2: 'phase 2', phase2: 'phase2', phase3: 'phase 3'},
  {phase3: 'phase 1', phase2: 'phase2', phase3: 'phase 3'}
];
let raceBegin = []; // wave starts moving once button is pressed
let startGun = new StartSound // starting gun sound
let button;

//PREload music - SOUND CANCELLED OUT BOAT RACE - BUTTON NOT IN RIGHT PLACE NOT WORKING!!!//
function preload() {
  soundFormats('wav');
  mySound = loadSound('sound/countdown.wav');
}
function setup() {
  createCanvas(1800, 600);
  background('#b0f0f7');
  button = createButton('begin');
  //console.log(button)
  button.position((width / 2) - (button.width/2), height /2 - (button.height /2));
  button.mousePressed(startGun);
  mySound.setVolume(0.1);
  mySound.play();
  button = createButton('START');
  button.mousePressed(togglePlaying);
  boat1.display();
  boat2.display();
  boat3.display(); 

}

function loaded() {

}
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html('STOP');
  }
  else {
    mySound.pause();
    button.html('START'); 

}  

function draw() { 
  //adding in new sequence start//
  if(raceState.phase > 0 && gameState.phase < 3) {
    pink.show(); //not correct name
    purple.show(); //not correct name
    start(race[raceState.currentRaceIndex].question, 0, 200, width,300) //not correct action
  }
  if(raceState.phase === 1) {
    text(race[raceState.currentRaceIndex].first, 0, 300, width, 400) //not correct action
  } 
  
  if (raceState.phase === 2) {
    text(race[raceState.currentRaceIndex].second, 0, 300, width, 400) //not correct action
  }

  if (raceState.phase === 3) {
    text(race[raceState.currentRaceIndex].third, 0, 300, width, 400)
  } //not correct action

  }
  function startRace() {
    raceState.phase1 = 1
    button.position(-100, -100) //not correct action
  }
  function mousePressed() {
    if (startRace(pink) && raceState.phase > 0) {
      startSound(pink) //not correct action
  }
    if (startRace(purple) && raceState.phase > 0) {
      startRace(purple) //not correct action
  }
  raceEnd.push() // do I even need this push???

  if (order === "first") {
    console.log ('switch to second')
    race.State.phase = 2;
  } else if (order === 'second') {
    quizState.currentRaceIndex++;
    quizState.phase = 1;
  }
 else {
  // race is done
  raceState.phase = 3
}

  stroke('#006699');
  //save these colors for drawing all the blues
  // color('#b0f0f7'); light blue
  // color('#006699'); water blue
  // color('#092054;'); dark blue

  noFill();
 
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

  //show the BOATS
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
}
