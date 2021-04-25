var mySound;

function setup() {
    createCanvas(400, 400);
    mySound = loadSound('music/boatPaddling.mp3);
}

function draw() {
    background(220);
    mySound.setVolume(0.1);
    mySound.play();
}