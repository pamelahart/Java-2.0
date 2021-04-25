// waves//
let dot = { x: 300, y: 0 }
let speed = 2
let leftAnchor = []
let rightAnchor = []

// boat//
let b1 = { x: 250, y: -10, w: 75, h: 100 }
let b1tip = { x1: 290, y1: 100, x2: 250, y2: 30, x3: 325, y3: 30 }
let force = 3

function setup() {
    let cnv = createCanvas(600, 400);
    cnv.position(50, 50, 'fixed');
    for (let i = 0; i < 300; i += 30) {
        leftAnchor.push({ x: i, y: 0 })
    }
    for (let j = 300; j < 600; j += 30) {
        rightAnchor.push({ x: j, y: 0 })
    }

}

function draw() {
    background(0, 102, 153);
    strokeWeight(2);
    stroke('white');
    point(dot.x, dot.y)


    // boat 1//
    rect(b1.x, b1.y, b1.w, b1.h)
    triangle(b1tip.x1, b1tip.y1, b1tip.x2, b1tip.y2, b1tip.x3, b1tip.y3);
    fill(230, 12, 117)
    b1.y += speed
    //b1tip.x1 += speed//

    for (let prop in b1tip) {
        if (prop.includes('y')) {
            b1tip[prop] += speed
        }
        // Wave LEft Loop 1//
    }
    for (let k = 0; k < leftAnchor.length; k++) {
        console.log(leftAnchor[k])
        line(leftAnchor[k].x, leftAnchor[k].y, dot.x, dot.y)
        leftAnchor[k].x -= force
    }
    dot.y += speed
    /*
 // LEFT//  
 // wave 1//
   line(anchor1.x, anchor1.y, dot.x, dot.y)
   dot.y += speed
   anchor1.x -= force
   
 // wave 2//
   line(anchor2.x, anchor2.y, dot.x, dot.y)
   anchor2.x -= force
 
   
   
   // RIGHT//  
 // wave 3//  
   line(anchor3.x, anchor3.y, dot.x, dot.y)
   anchor3.x += force;
   
 // wave 4//  
   line(anchor4.x, anchor4.y, dot.x, dot.y)
   anchor4.x += force;
   force = force /1
 */

    // //for (let circleD = 16; circleD <= 36; circleD += 40) {
    //   circle(circleD, 20, circleD, 20);
    // }//
}

