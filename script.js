//assign var to class 
const container = document.querySelector('.container');

//function to create square
function makeSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
});
};

let gridSize = parseInt(prompt("Enter a grid size (max 100):"));
let totalSquares = gridSize * gridSize;

container.innerHTML = "";

//loop to generate every cell / square
for (let i = 0; i < totalSquares; i++) {
    makeSquare();
};


