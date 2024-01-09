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

const sumOperator = document.querySelector('#plus');
sumOperator.addEventListener('click', () => {
    if (state.inputTarget === 'num1') {
        state.inputTarget = 'num2';
        state.operator = '+';
    }

    if (state.inputTarget === 'num2' && state.num2 !== "") {
        state.num1 = parseInt(state.num1) + parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }
});

const resultOperator = document.querySelector('#equals');
resultOperator.addEventListener('click', () => {
    if(state.num2 !== "" && state.operator === '+') {
        state.num1 = parseInt(state.num1) + parseInt(state.num2);
        state.num2 = "";
        result = state.num1;
        display.textContent = state.num1;
    }
});
