// Test string
// const string = '72,86,71,86,69,86,69,85,68,85,67,85,66,85,65,85,65,86,65,87,65,88,66,90,66,91,67,94,67,96,67,97,69,98,71,100,72,101,74,102,76,103,78,104,80,104,82,104,83,106,84,106,85,106,86,106,87,106,89,106,89,105,89,104,89,103,89,102,88,99,87,98,87,96,87,95,86,95,86,94,85,93,84,92,83,91,82,91,82,90,81,90,80,90,78,90,77,89,77,88,76,87';
'use strict'

// Initiate the program
function setup() {

  // Creating canvas element
  const canvas = createCanvas(450, 500);

  // Assigning it to the div with id: #canvas
  canvas.parent('canvas')

  // Load empty BG image
  const bg = loadImage('images/body.png', img => {
    image(img, 0, 0);
  });

  // Select button with id: #drawButton
  const drawButton = document.querySelector('#drawButton');

  // Assign click event to button
  drawButton.addEventListener('click', () => {
    // Select button with id: #drawButton
    const input = document.querySelector('#input').value;

    // Parse coordinates to array format
    const parser = (string) => {
      return string.split(',')
                   .map(parseFloat)
                   .reduce((acc, val, i, arr) => (i % 2) ? acc : [...acc, arr.slice(i, i + 2)], []);
    }

    // Create array with parsed coordinates
    const parsedCoordinates = parser(input)

    // Draw coordinates on to the BG image from the array with parsed coordinates
    function draw() {
      // Draw red color
      stroke(255, 40, 0);
      // 3 pixels pr. coordinate
      strokeWeight(3);
      // Draw each coordinate in the array
      for (var i = 0; i < parsedCoordinates.length; i++) {
        point(parsedCoordinates[i][0], parsedCoordinates[i][1]);
      }
    }

    draw();
  });

  // Select button with id: #saveButton
  const saveButton = document.querySelector('#saveButton');

  // Assign click event to button
  saveButton.addEventListener('click', () => {
    // Save and give a file name
    saveCanvas(canvas, "mySVG.png");
    // Prints to the console
    print("Saved");
    // Just export once
    noLoop();
  });
}
