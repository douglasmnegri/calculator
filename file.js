let firstNumber = 3;
let secondNumber = 5;
let operator = "*";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operate = () => {
    switch(operator) {
        case "+":
        return firstNumber + secondNumber;
        break;

        case "-":
        return firstNumber - secondNumber;
        break;

        case "*":
        return firstNumber * secondNumber;
        break;

        case "/":
        return firstNumber / secondNumber;
        break;

        default:
        return firstNumber;
        break;
    }
}


const container = document.querySelector('#container');
const screenResult = document.createElement('div');
screenResult.classList.add('numbScreen')
screenResult.textContent = 0;

function createBoxes(numBox) {

function randomNum() {
    return Math.floor(Math.random())
}
container.appendChild(screenResult)
    for(let i = 0; i < numBox; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);

        for (let j = 0; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = "box";
            row.appendChild(square);
            
        };
    };
};

createBoxes(4);
console.log(operate());


const square = document.querySelectorAll('.box');
square.forEach((div, index) => {
    const randomNumber = index + 1;
    div.classList.add(`square${randomNumber}`);
});




const squareOne = document.querySelector('.square1');
const squareTwo = document.querySelector('.square2');
const squareThree = document.querySelector('.square3');
const squareFour = document.querySelector('.square4');
squareOne.textContent = "7";
squareTwo.textContent = "8";
squareThree.textContent = "9";
squareFour.textContent = "+";

const squareFive = document.querySelector('.square5');
const squareSix = document.querySelector('.square6');
const squareSeven = document.querySelector('.square7');
const squareEight = document.querySelector('.square8'); 
squareFive.textContent = "4";
squareSix.textContent = "5";
squareSeven.textContent = "6";
squareEight.textContent = "-";

const squareNine = document.querySelector('.square9');
const squareTen = document.querySelector('.square10');
const squareEleven = document.querySelector('.square11');
const squareTwelve = document.querySelector('.square12'); 
squareNine.textContent = "1";
squareTen.textContent = "2";
squareEleven.textContent = "3";
squareTwelve.textContent = "x";

const squareThirteen = document.querySelector('.square13');
const squareFourteen = document.querySelector('.square14');
const squareFifteen = document.querySelector('.square15');
const squareSixteen = document.querySelector('.square16'); 
squareThirteen.textContent = "C";
squareFourteen.textContent = "0";
squareFifteen.textContent = "=";
squareSixteen.textContent = "÷";