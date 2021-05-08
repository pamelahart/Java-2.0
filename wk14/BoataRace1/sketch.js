// waves//
let dot = { x: 300, y: 0 }
let speed1 = -2.5
let speed2 = -5
let speed3 = -3
let leftAnchor = []
let rightAnchor = []

// boat1//
let b1 = { x: 250, y: -10, w: 75, h: 100 }
let force = 3 

// boat2//
let b2 = { x: 250, y: -10, w: 75, h: 100 }

// boat3//
let b3 = { x: 250, y: -10, w: 75, h: 100 }


//this is where the PINK boat1 is generated//
var boat1 = new Boat(620, 160, '#E60C76', 'up', speed1) 
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only 

//this is where the PURPLE boat2 is generated//
var boat2 = new Boat(820, 380, '#eb8034', 'up', speed2)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

//this is where the GREEN boat3 is generated//
var boat3 = new Boat(1020, 600, '#7333b8', 'up', speed3)
// UP is our boat direction & can be changed to down & is left & right, speed will be forward only

function setup() {
    let cnv = createCanvas(1200, 800);
    cnv.position(200, 200, 'fixed');
    boat1.display();
    boat2.display();
    boat3.display();
}

function draw() {
    background('#092054');
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