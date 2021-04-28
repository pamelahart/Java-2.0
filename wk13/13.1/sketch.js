var slider;
var pos, pos2, pos3;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  slider = createSlider(0, 15, 0)
  
  pos = 0.0
  inc = 2.0
  fill('#78efff')
  
  pos2 = 0.0
  inc2 = 4.0
  fill('#6ff794')
  
  pos3 = 0.0
  inc3 = 6.0
  fill('#d858f5')
}

function draw() {
  clear()
 
  background(0);

  translate(width/2, height/2)
  
  var mySinVal = sin(pos) 
  var mySinVal2 = sin(pos2)
  var mySinVal3 = sin(pos3)
  
  amplified = mySinVal * 400
  amplified2 = mySinVal2 * 50
  mplified2 = mySinVal3 * 50
  
  for (x = 0; x <= 360; x = x + 5) {
    
    curve(0, 10, 50, 20, amplified, 10, 10, 10,)
    rotate(x)
    
  }
  
  pos = pos + slider.value()
  pos2 = pos2 + inc
  pos3 = pos3 + inc
}

//wave classes have 3 things:
amplitude
period
phase
//
