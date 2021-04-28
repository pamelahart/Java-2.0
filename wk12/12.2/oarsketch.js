var level;
var mySound;
var circleX = 250
var circleY = 250

function preload() {
 mySound = loadSound('BoatPaddling.mp3');
}
function setup() {
  createCanvas(400, 400);
  mySound.setVolume(0.1);
  mySound.play();
}
function draw() {
  level = mySound.getLevel()
  var diameterX = level * 2500
  var diameterY = level * 2500 * random(1.5)

  ellipse(circleX, circleY, diameterX, diameterY)
}