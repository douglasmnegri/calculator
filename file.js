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


container.appendChild(screenResult)
    for(let i = 0; i < numBox; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);

        for (let j = 1; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = "box";
            row.appendChild(square);
        };
    };
};

createBoxes(5);
console.log(operate());