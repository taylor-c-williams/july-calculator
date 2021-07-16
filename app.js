import { add, subtract, multiply, divide, square, cube } from './utils.js';

const numberOne = document.getElementById('input1');
const numberTwo = document.getElementById('input2');

const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const piButton = document.getElementById('pi');
const squareButton = document.getElementById('square');
const cubeButton = document.getElementById('cube');


const solution = document.getElementById('solution');

cubeButton.addEventListener('click', ()=>{
    const x = Number(numberOne.value);
    const sum = cube(x);
    numberOne.value = sum;
});

squareButton.addEventListener('click', ()=>{
    const x = Number(numberOne.value);
    const sum = square(x);
    numberOne.value = sum;
});

piButton.addEventListener('click', ()=> {
    numberOne.value = '3.141592653589793238462643383279502884197169399375105820974944592307816406286';
});  

addButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = add(x, y);
    solution.textContent = sum;
});  

subtractButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = subtract(x, y);
    solution.textContent = sum;
});

multiplyButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = multiply(x, y);
    solution.textContent = sum;
});

divideButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = divide(x, y);
    solution.textContent = sum;
});


