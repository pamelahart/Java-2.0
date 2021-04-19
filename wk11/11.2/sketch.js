let bx;
let by;
let circleSize = 200;
let overCircle = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.position(50, 50,'fixed');
  bx = width /2.0;
  by = height / 2.0;
}

function draw() {
  background (0,102,153);
  noFill();
  strokeWeight(2);
  stroke('white');
  
  
  // Cursor is over the circle
  if (
    mouseX > bx - (circleSize /2.0) && 
    mouseX < bx + (circleSize /2.0) &&
    mouseY > by - (circleSize /2.0) &&
    mouseY < by + (circleSize /2.0)
  ) {
    overCircle = true;
    if (!locked) {
      stroke('white');
      fill(244, 122, 158); /*colors the circle*/
    }
  } else {
    stroke(80, 180, 180);
    fill(244, 122, 158);
    overCircle = false;
  }
  //loop
  for (let circleDiameter = 20; circleDiameter <= 200; circleDiameter += 20){
    circle(bx, by, circleDiameter);
  }
}
//Mouse is released
function mousePressed() {
  if (overCircle) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
