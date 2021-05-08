//define the class of boat - to draw multiples//
class Boat {
  
  constructor(pos_x, pos_y, color, direction, speed) {
    this.x = pos_x;
    this.y = pos_y;
    this.color = color;
    this.stroke = 'white';
    this.direction = direction;
    this.speed = speed;
    this.wakeAnchorX = this.x + 150;
    this.wakeAnchorY = this.y;
    
    //changes the boat direction//
    this.boatVertices = [this.x, this.y, 
                     this.x+50, this.y-25,
                     this.x+150, this.y-25,
                     this.x+150, this.y+25,
                     this.x+50, this.y+25
                    ];
   
    //this is where the wake is generated//
    this.wake = new Wake(this.wakeAnchorX, this.wakeAnchorY, this.color, this.direction, this.speed)

  }
  
//draws the boat//
  display() {
    fill(this.color)
    stroke(this.stroke)
    beginShape()
      // loop every other
  
    for (var idx = 0; idx < this.boatVertices.length; idx = idx + 2) {
      vertex(this.boatVertices[idx], this.boatVertices[idx + 1]);
    }
    vertex(this.boatVertices[0],this.boatVertices[1])
    endShape()
    
    this.wake.display()
  }
  //updates to the location of the boat
  update() {
    for (var idx = 0; idx < this.boatVertices.length; idx = idx + 2){
     this.boatVertices[idx] = this.boatVertices[idx] + this.speed;   
    }
    this.x = this.x + this.speed; 
    
    this.wakeAnchorX = this.wakeAnchorX + this.speed;
   
    this.wake.update()
  
  }
  
}