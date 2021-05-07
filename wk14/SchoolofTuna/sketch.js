const flock =[];

let alignSlider, cohesionSlider, separationSlider;

//tuna shape
let t1 = { x: 250, y: -10, w: 75, h: 100 }

//this is where the tuna is generated
var tuna1 = new Tuna(300, 200, '#E60C76') //left off 'up' & speed

function setup() {
  createCanvas(640, 640);
  tuna1.display(); //shows the tuna setup
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);
  for(let i = 0; i < 100; i++) {
  flock.push(new Boid());
}
}
function draw() {
  background(0, 102, 153); //standard water color
  tuna1.display(); // draws & then shows the tuna complete
  tuna1.update();
  
  for(let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
  
}