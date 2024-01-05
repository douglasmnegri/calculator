let firstNumber = 0;
let secondNumber = 5;
let operator = "*";

const container = document.querySelector('#container');
const screenResult = document.createElement('div');
screenResult.classList.add('numbScreen')
screenResult.textContent = firstNumber;

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

//We need to select each box, and add a function that process the number and shows it in our display.
//addEventListener should be the function that calls each number/operations. 


function selectNumber() {
    for (let i = 1; i <= 16; i++) {
    const box = document.querySelector(`.square${i}`);
    box.addEventListener('click', () => {
        
    if(firstNumber === 0) {
        if(box.classList.contains('square1')) {
            firstNumber = 7;
            console.log(firstNumber)

        }
       else if (box.classList.contains('square2')) {
            firstNumber += 8;
       }
       else if (box.classList.contains('square3')) {
            firstNumber += 9;
       }
       else if (box.classList.contains('square5')) {
            firstNumber += 4;
       }
       else if (box.classList.contains('square6')) {
            firstNumber += 5;
       }
       else if (box.classList.contains('square7')) {
            firstNumber += 6;
       }
       else if (box.classList.contains('square9')) {
            firstNumber += 1
       }
       else if (box.classList.contains('square10')) {
            firstNumber += 2
       }
       else if (box.classList.contains('square11')) {
            firstNumber += 3
       }
       screenResult.textContent = firstNumber;
    }

    else if (firstNumber !== 0) {
        if(box.classList.contains('square1')) {
            firstNumber = "7";

        }
       else if (box.classList.contains('square2')) {
            firstNumber = "8";
       }
       else if (box.classList.contains('square3')) {
            firstNumber = "9";
       }
       else if (box.classList.contains('square5')) {
            firstNumber = "4";
       }
       else if (box.classList.contains('square6')) {
            firstNumber = "5";
       }
       else if (box.classList.contains('square7')) {
            firstNumber = "6";
       }
       else if (box.classList.contains('square9')) {
        firstNumber = "1"
       }
        else if (box.classList.contains('square10')) {
            firstNumber = "2"
       }
        else if (box.classList.contains('square11')) {
            firstNumber = "3";
       }
       screenResult.textContent += firstNumber;
    }
    });
};
};

selectNumber();
//When the variable is called by the function addEventListener, it should show the value in our display.
//The initial value will always be 0, so we can't simply concantenate for the first time. 

/* Ex: if (screenResult.textContent === 0) {

    switch (screenResult) {
    case squareOne:
    screenResult.textContent = 7;
    break;

    case squareTwo:
    screenResult.textContent = 8;
    break;
    }
} */
squareSixteen.textContent = "÷";
