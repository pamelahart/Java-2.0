let img1; // Declare variable 'img'.
let img2;
let img3;
let img4;

//button
var button;

// class Oar {
//  constructor(x_, y_) {
//    // Location and size
//    this.x = x_;
//    this.y = y_;


function preload() {
 soundFormats ('wav'); 
 mySound = loadSound('BoatPaddling.mp3');
  
}
function setup() {
  createCanvas(600, 600);
  // background(255)
  mySound.setVolume(0.1);
  mySound.play();
    button = createButton('PLAY')
  button.mousePressed(togglePlaying);
  img1 = loadImage('OAR2.png');
  img2 = loadImage('Waves_black.png');
}

 function loaded() {
  
}
function togglePlaying() {
  if (!mySound.isPlaying()) {
  mySound.play();
  mySound.setVolume(0.3);
  button.html('PAUSE');
}
else{
  mySound.pause();
  button.html('PLAY');
}
  img1 = loadImage('OAR2.png');
  img2 = loadImage('Waves_black.png')
}

function draw() {
  image(img1, 200, 0, 300);
 
}

