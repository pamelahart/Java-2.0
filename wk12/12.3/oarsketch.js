let img1; // Declare variable 'img'.
let img2;
let img3;
// let img4;

//button
var button;

// class Oar {
//  constructor(x_, y_) {
//    // Location and size
//    this.x = x_;
//    this.y = y_;


function preload() {
 soundFormats ('wav'); 
 mySound = loadSound('RowYourBoat.mp3');
  
}
function setup() {
  createCanvas(600, 600);
  // background(255)
  mySound.setVolume(0.1);
  mySound.play();
  img1 = loadImage('OAR1.png');
  img2 = loadImage('OAR2.png');  
  img3 = loadImage('OAR3.png');
  button = createButton('PLAY')
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
else{
  mySound.pause();
  button.html('play');
}

  // img1 = loadImage('OAR1.png');
  // img2 = loadImage('OAR2.png');  
  // img3 = loadImage('OAR3.png');
  // img4 = loadImage('Waves_black.png')
}

function draw() {
  image(img1, 10, 0);
  image(img2, 180, 0);
  image(img3, 360, 0);
  // image(img4, 0 ,0);
}

