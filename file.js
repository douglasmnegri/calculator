const state = {
    num1: "",
    num2: "",
    operator: null,
    inputTarget: 'num1'
};


const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('button');
numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        const buttonText = number.textContent;

        if (!isNaN(parseFloat(buttonText))) {
            if(state.operator === '=') {
                state.num1 = "";
                state.num2 = "";
                state.operator = "";
            }
            if (state.inputTarget === 'num1') {
                state.num1 += buttonText;
                display.textContent = state.num1;
            } else {
                state.num2 += buttonText;
                display.textContent = state.num2;
            }
        }
    });
});

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    if (state.inputTarget == 'num1') {
        state.num1 = Math.floor(state.num1 / 10)
        display.textContent = state.num1;
        console.log(state.num1)
    }

    if (state.inputTarget == 'num2') {
        state.num2 = state.num2.slice(0, -1);
        display.textContent = state.num2;
        console.log(state.num2)
    }
  
});

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => {

    if(state.inputTarget == 'num1') {
        state.num1 = state.num1 / 100;
        display.textContent = state.num1;
        console.log(state.num1)
    }
    if (state.inputTarget == 'num2') {
        state.num2 = state.num2 / 100;
        display.textContent = state.num2;
    }
});

const decimalPoint = document.querySelector('#decimal');
decimalPoint.addEventListener('click', () => {
    if (state.inputTarget == 'num1' && !state.num1.includes('.')) {
        state.num1 += '.';
        parseFloat(state.num1);
        display.textContent = state.num1;
    }

    if (state.inputTarget == 'num2' && !state.num2.includes('.')) {
        state.num2 += '.';
        display.textContent = state.num2;
    }
});

const addOperator = document.querySelector('#plus');
addOperator.addEventListener('click', () => {
    returnOperation();
    state.operator = '+';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseFloat(state.num1) + parseFloat(state.num2);
        state.num2 = "";
    }

});

const subtractOperator = document.querySelector('#subtract');
subtractOperator.addEventListener('click', () => {
    returnOperation();
    state.operator = '-';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseFloat(state.num1) - parseFloat(state.num2);
        state.num2 = "";
        display.textContent = state.num1;
    }
});

const multiplyOperator = document.querySelector('#multiply');
multiplyOperator.addEventListener('click', () => {
    returnOperation();
    state.operator = '*';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseFloat(state.num1) * parseFloat(state.num2);
        state.num2 = "";
        display.textContent = state.num1;
    }
});

const divisionOperator = document.querySelector('#division');
divisionOperator.addEventListener('click', () => {
        returnOperation();
        state.operator = '/';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseFloat(state.num1) / parseFloat(state.num2);
        state.num2 = "";
        display.textContent = state.num1;
    }
    
});

const clearDisplay = document.querySelector('#clear');
clearDisplay.addEventListener('click', () => {
    state.num1 = "";
    state.num2 = "";
    state.operator = null;
    state.inputTarget = 'num1';
    display.textContent = 0;
});

const resultOperator = document.querySelector('#equals');
resultOperator.addEventListener('click', () => {
    returnOperation();
});

function returnOperation() {
    if (state.inputTarget === 'num2' && state.num2 !== "") {
        switch (state.operator) {
            case '+':
                state.num1 = parseFloat(state.num1) + parseFloat(state.num2);
                break;
            case '-':
                state.num1 = parseFloat(state.num1) - parseFloat(state.num2);
                break;
            case '*':
                state.num1 = parseFloat(state.num1) * parseFloat(state.num2);
                break;
            case '/':
                state.num1 = parseFloat(state.num1) / parseFloat(state.num2);
                break;
            default:
                break;
        }

        display.textContent = state.num1;
        state.num2 = "";
        state.operator = "=";
        state.inputTarget = 'num1';
    }
}