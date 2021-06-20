// Global variables here

// Selecting color
const pickColor = document.querySelector('#colorPicker');
// Select input height
const selectHeight = document.querySelector('#inputHeight');
// Select input width 
const inputWidth = document.querySelector('#inputWidth');
// Select canvas area 
const canvas = document.querySelector('table');
// select the form 
const form = document.querySelector('form');

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  event.preventDefault();

  // Removes exsisting canvas if any.
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  // New canvas created based on the input height and width.
  for (let xcor = 1; xcor <= inputHeight.value; xcor++) {
    const newRow = canvas.insertRow(-1);
    for (let ycor = 1; ycor <= inputWidth.value; ycor++) {
      const newColumn = newRow.insertCell(-1);
    }
  }
}

// Chosen color is selected when clicking on the outer right border.
function colorPixel(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = colorPicker.value;
  }
}

// Draws a  canvas of a selected size after form submission
form.addEventListener('submit', makeGrid);

// Colors a chosen cell after the user clicks on it.
canvas.addEventListener('click', colorPixel);