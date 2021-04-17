var cwidth = 640
var cheight = 400
var row = 10

function setup() {
    createCanvas(cwidth, cheight);
    for (x = 0; x <= width; x += row) {
        for (y = 0; y <= height; y += row) {
            // stroke(x - 100);
            if (y % 3 === 0) {
                text('\\', x, y);
            }
            else {
                text('/', x, y);
            }
        }
    }
}