// let xCoordinates = [];
// let yCoordinates = [];
let coordinates = [];

function setup() {
  createCanvas(450, 500);
  background(204);
  redraw();


  let bg = loadImage('images/body.png', img => {
    image(img, 0, 0);
  });
}

function draw() {
  stroke(255, 40, 0);
  if (mouseIsPressed === true) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    point(mouseX, mouseY);
  }
}

function mouseDragged() {
  // xCoordinates.push(mouseX);
  // yCoordinates.push(mouseY);
  coordinates.push(mouseX + ',' + mouseY);
  noStroke();
  fill(255, 40, 0);
  // ellipse(mouseX, mouseY, 3, 3);
  strokeWeight(3);
  point(mouseX, mouseY);

}

function mouseReleased() {
  console.log(coordinates.toString());
}
//
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//   save("mySVG.svg"); // give file name
//   print("saved svg");
//   noLoop(); // we just want to export once
// });
