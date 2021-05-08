//wave//
var offset = 0;
var strum = 1;

//button
var button;

/* function preload() {
  soundFormats('wav');
  mySound = loadSound('RowYourBoat.mp3');
 */
/* } */
function setup() {
  createCanvas(1200, 800);
  background('#b0f0f7');
 /*  mySound.setVolume(0.1);
  mySound.play();
  button = createButton('PLAY');
  button.mousePressed(togglePlaying); */
}

/* function loaded() {

}
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html('pause');
  }
  else {
    mySound.pause();
    button.html('play');

}  */

function draw() { 
  
  stroke('#006699');
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
