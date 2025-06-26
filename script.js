//assign var to class 
const container = document.querySelector('.container');

//function to create square
function makeSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
};

//prompt user for input
let gridSize = parseInt(prompt("Enter a grid size (max 100):"));


if (gridSize > 0 && gridSize <= 100) {
    let totalSquares = gridSize * gridSize;
    container.innerHTML = "";
    for (let i = 0; i < totalSquares; i++) {
        makeSquare();
    }
} else {
    alert("Please enter a number between 1 and 100.");
};



