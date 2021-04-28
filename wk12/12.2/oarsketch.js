var level;
var mySound;
var circleX = 250
var circleY = 250

function preload() {
  soundFormats('wav');
  mySound = loadSound('BoatPaddling.mp3');
}
function setup() {
  createCanvas(400, 400);
  loadImage('OAR1.png', img => {
    image(img, 0, 0);
    loadImage('OAR2.png', img => {
      image(img, 0, 30);
      loadImage('OAR1.png', img => {
        image(img, 0, 0);
      });
  mySound.setVolume(0.1);
  mySound.play();
  amplitude = new p5.Amplitude();

  }

function draw() {
  var diameterX = level * 2500
  var diameterY = level * 2500 * random(1.5)
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  fill(200, 21, 20)
  ellipse(circleX, circleY, diameterX, diameterY)
}
/* function playWaves() {
  if (waves.isPlaying()) {
    waves.stop();
  } else {
    waves.play();
  } */
/* } */
