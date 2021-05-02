
// boat- turn into a tuna//
//let tuna1 = { x: 250, y: -10, w: 75, h: 100 }

class Boid {
  constructor() {
    this.position = createVector(width/2, height/2);
    this.velocity = createVector();
    this.acceleration = createVector();
}

show() {
  strokeWeight(16);
  stroke(255);
  point(this.position.x, this.position.y);
}
  
}