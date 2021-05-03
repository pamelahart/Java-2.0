
class Wake {
  
  constructor(pos_x, pos_y, color, direction, speed) {
    this.x = pos_x;
    this.y = pos_y;
    this.color = color; //wake color
    this.waveColor = 'white'; //wave color
    this.direction = direction;
    this.speed = speed;
    this.wakeVertices = [this.x + 1500, this.y -100, //change w/ the wave
                        this.x + 1500, this.y + 100,//change w/ the wave
                        this.x, this.y
                        ]
    
//     this.waveVertices = []; loop for wave not working - hard code
//      for (var j = 900; j <= -900; j -= 100){
//     this.waveVertices.push(this.x + 600); //not correct- work on for final 
//    console.log(j)
       
//        if (j < 100){
//           this.waveVertices.push(this.y - j)
//         }
//         else
//            { this.waveVertices.push(this.y + j)}
//        }
// console.log (this.waveVertices)
    
    //hard coding for the wave both sides
    this.waveVertices = [
                     
      
                      this.x + 600, this.y + 900, 
                      this.x + 600, this.y + 800,
                      this.x + 600, this.y + 700,
                      this.x + 600, this.y + 600,
                      this.x + 600, this.y + 500,
                      this.x + 600, this.y + 400,
                      this.x + 600, this.y + 300,
                      this.x + 600, this.y + 200,
                      this.x + 600, this.y + 1000,
      
                      this.x + 600, this.y - 1000,
                      this.x + 600, this.y - 200,
                      this.x + 600, this.y - 300,
                      this.x + 600, this.y - 400,
                      this.x + 600, this.y - 500,
                      this.x + 600, this.y - 600,
                      this.x + 600, this.y - 700,
                      this.x + 600, this.y - 800,
                      this.x + 600, this.y - 900,
    ]
  }

  
  display() {
    
 //display the Loop for wave//
     stroke(this.waveColor);
   
  //updating the Display the Waves//
    for (var idx = 0; idx < this.waveVertices.length; idx = idx + 2) {
      line(this.x, this.y, this.waveVertices[idx],this.waveVertices[idx + 1]);
    }
      
  //defines shape & color for Wake//
      fill(this.color);
      noStroke();
      beginShape()
    
   //updating the Loop for the Wake//
    for (var idx = 0; idx < this.wakeVertices.length; idx = idx + 2) {
         
    vertex(this.wakeVertices[idx], this.wakeVertices[idx + 1]);
    }
    vertex(this.wakeVertices[0],this.wakeVertices[1])
    endShape()
      
    
  }
  //updating the wave & wake//
  update() {
    //this updates the wake position (dot on the back of the boat)
    this.x = this.x + this.speed; 
    //this.y = this.y// 
    
    //updating wave locations
    for (var idx = 0; idx < this.waveVertices.length; idx = idx + 2){
      this.waveVertices[idx] = this.waveVertices[idx] + this.speed; 
    }
   //updating wake location
    for (var idx = 0; idx < this.wakeVertices.length; idx = idx + 4) {
     this.wakeVertices[idx] = this.wakeVertices[idx] + this.speed; 
    }
    
  }
}