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
            if (state.operator === '=') {
                state.num1 = "";
                state.num2 = "";
                state.operator = "";
            }

            const cleanedInput = cleanInput(buttonText);

            if (state.inputTarget === 'num1' && state.num1.length <= 9) {
                state.num1 += cleanedInput;
                display.textContent = state.num1;

            } else if (state.inputTarget === 'num2' && state.num2.length <= 9) {
                state.num2 += cleanedInput;
                display.textContent = state.num2;
            }
        }
    });
});

function cleanInput(input) {
    const hasDecimal = input.includes('.');
    let cleanedInput = input.replace(/\D/g, '');

    if (hasDecimal) {
        cleanedInput = cleanedInput.replace(/(?!^)\./, ''); 
    }

    return cleanedInput;
}



const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    if (state.inputTarget === 'num1') {
        state.num1 = state.num1.slice(0, -1);
        display.textContent = state.num1;
        state.inputTarget = 'num1'
    }
    if (state.inputTarget === 'num2') {
        state.num2 = state.num2.slice(0, -1);
        display.textContent = state.num2;
        state.inputTarget = 'num2'
    }
    if (state.num1.toString().length > 9) {
        clear();
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

    if (state.num1.toString().length > 8) {
        display.textContent = state.num1.toExponential(4); 
    } else {
        display.textContent = state.num1;
    }
    state.num2 = "";
    state.inputTarget = 'num1';
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
    clear();
});

function clear() {
    state.num1 = "";
    state.num2 = "";
    state.operator = null;
    state.inputTarget = 'num1';
    display.textContent = 0;
}

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

        if (state.num1.toString().length > 8) {
            display.textContent = state.num1.toExponential(4); 
        } else {
            display.textContent = state.num1;
        }

        state.num2 = "";
        state.operator = '=';
        state.inputTarget = 'num1';
    }
}


let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log(key);
    const isNumber = () => {return isFinite(key)};

    if(isNumber(key) === true) {
        document.getElementById(`${key}`).click();
    }
	if (key === 'r' || event.key ==='c' || event.key === 'C') {
        document.querySelector('#clear').click()
	}
    if (key === '.') {
		document.querySelector('#decimal').click();	
	}
	if (key === '=' || event.key === 'Enter') {
		document.querySelector('#equals').click();	
	}
    if (key === '*' || key === "x" || key === "X") {
        document.querySelector('#multiply').click();
    }
    if (key === '-') {
        document.querySelector('#subtract').click();
    }
    if(key === '+') {
        document.querySelector('#plus').click();
    }
    if(key === '%') {
        document.querySelector('#percentage').click();
    }
    if(key === '/' || key === '÷') {
        document.querySelector('#division').click();
    }
    if(key === 'e' || key === 'E' || key === 'Backspace') {
        document.querySelector('#eraser').click();
    }
    if(key === 'n' || key === 'N') {
        document.querySelector('button').click();
    }
});