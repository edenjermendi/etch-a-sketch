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

//default size
let gridSize = 16;

function generateGrid(size) {
    container.innerHTML = '';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
      makeSquare();
    }
  }

//initial grid
generateGrid(gridSize);

const gridSelect = document.querySelector('#gridSizeSelect');
gridSelect.addEventListener('change', (e) => {
    let newSize = parseInt(e.target.value);

    if (!isNaN(newSize)) {
    gridSize = newSize;
    generateGrid(gridSize);
    }
});




