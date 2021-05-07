//define the Tuna Class - to draw multiples- needs to be part of the boid count//
class Tuna {
  
  constructor(pos_x, pos_y, color, direction, speed) {
    this.x = pos_x;
    this.y = pos_y;
    this.color = color;
    this.stroke = 'white';
    this.direction = direction;
    this.speed = speed;
    this.wakeAnchorX = this.x + 150;
    this.wakeAnchorY = this.y;
    
    //changes the Tuna direction- needs to become boid directions//
    this.tunaVertices = [this.x, this.y, 
                     this.x+50, this.y-25,
                     this.x+150, this.y-25,
                     this.x+150, this.y+25,
                     this.x+50, this.y+25
                    ];
  }
  
//draws the tuna//
  display() {
    fill(this.color)
    stroke(this.stroke)
    beginShape()
      // loop every other
  
    for (var idx = 0; idx < this.tunaVertices.length; idx = idx + 2) {
      vertex(this.tunaVertices[idx], this.tunaVertices[idx + 1]);
    }
    vertex(this.tunaVertices[0],this.tunaVertices[1])
    endShape()
    
  }
  //updates to the location of the tuna
  
  update() {
    for (var idx = 0; idx < this.tunaVertices.length; idx = idx + 2){
     this.tunaVertices[idx] = this.tunaVertices[idx] + this.speed;   
    }
    this.x = this.x + this.speed; 
  
  }
  
}