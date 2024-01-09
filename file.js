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

        if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
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

const addOperator = document.querySelector('#plus');
addOperator.addEventListener('click', () => {
    state.operator = '+'
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseInt(state.num1) + parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }
});

const subtractOperator = document.querySelector('#subtract');
subtractOperator.addEventListener('click', () => {
    state.operator = '-';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseInt(state.num1) - parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
        console.log(state.operator);
    }
});

const multiplyOperator = document.querySelector('#multiply');
multiplyOperator.addEventListener('click', () => {
    state.operator = '*';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseInt(state.num1) * parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }
});

const divisionOperator = document.querySelector('#division');
divisionOperator.addEventListener('click', () => {
    state.operator = '/';
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseInt(state.num1) / parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
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
    if (state.inputTarget === 'num2' && state.num2 !== "" && state.operator === '+') {
        state.num1 = parseInt(state.num1) + parseInt(state.num2);
        state.num2 = "";
        state.operator = "";
        result = state.num1;
        display.textContent = state.num1;
    }

    else if (state.inputTarget === 'num2' && state.num2 !== "" && state.operator === '-') {
        state.num1 = parseInt(state.num1) - parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }

    else if (state.inputTarget === 'num2' && state.num2 !== "" && state.operator === '/') {
        state.num1 = parseInt(state.num1) / parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }

    else if (state.inputTarget === 'num2' && state.num2 !== "" && state.operator === '*') {
        state.num1 = parseInt(state.num1) * parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }
});
