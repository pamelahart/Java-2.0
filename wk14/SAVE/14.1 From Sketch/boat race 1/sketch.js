// waves//
let dot = { x: 300, y: 0 }
let speed1 = -2.5
let speed2 = -5
let speed3 = -9
let leftAnchor = []
let rightAnchor = []

// boat1//
let b1 = { x: 250, y: -10, w: 75, h: 100 }
let force = 3 // boat go faster

// boat2//
let b2 = { x: 250, y: -10, w: 75, h: 100 }

// boat3//
let b3 = { x: 250, y: -10, w: 75, h: 100 }


//this is where the boat1 is generated//
var boat1 = new Boat(620, 200, '#E60C76', 'up', speed1) 
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only 

//this is where the boat2 is generated//
var boat2 = new Boat(820, 100, '#B02C91', 'up', speed1)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

//this is where the boat3 is generated//
var boat3 = new Boat(1020, 100, '#B02C91', 'up', speed1)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

function setup() {
    let cnv = createCanvas(600, 400);
    cnv.position(50, 50, 'fixed');
    boat1.display();
    boat2.display();
    boat3.display();
}

function draw() {
    background(0, 102, 153);
    strokeWeight(2);
    stroke('white');
    point(dot.x, dot.y);
    boat1.display();
    boat1.update();
    boat2.display();
    boat2.update();
    boat3.display();
    boat3.update();
}