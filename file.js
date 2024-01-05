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