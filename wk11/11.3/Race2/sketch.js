// waves//
let dot = { x: 300, y: 0 }
let speed1 = -2.5
let leftAnchor = []
let rightAnchor = []

// boat1//
let b1 = { x: 250, y: -10, w: 75, h: 100 }
let force = 3 // boat go faster

//this is where the boat1 is generated//
var boat1 = new Boat(620, 200, '#B02C91', 'up', speed1)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only 

function setup() {
    let cnv = createCanvas(600, 400);
    cnv.position(50, 50, 'fixed');
    boat1.display();
}

function draw() {
    background(0, 102, 153);
    strokeWeight(2);
    stroke('white');
    point(dot.x, dot.y);
    boat1.display();
    boat1.update();
}