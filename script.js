//assign var to class
const container = document.querySelector('.container');

//function to create square
function makeSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

//loop to generate every cell / square
for (let i = 0; i < 256; i++) {
    makeSquare();
};