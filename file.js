let firstNumber = 0;
let secondNumber = 0;
let operatorElement = " ";

const container = document.querySelector('#container');
const screenResult = document.createElement('div');
screenResult.classList.add('numbScreen')
screenResult.textContent = firstNumber;

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

const operate = (a, b, operator) => {
    switch(operator) {
        case "+":
        return a + b
        break;

        case "-":
        return a - b;
        break;

        case "*":
        return a * b;
        break;

        case "/":
        return a / b;
        break;

        default:
        return a;
        break;
    }
}

//Transformar em HTML - UI
const square = document.querySelectorAll('.box');
square.forEach((div, index) => {
    const randomNumber = index + 1;
    div.classList.add(`square${randomNumber}`);
});


const squareOne = document.querySelector('.square1');
const squareTwo = document.querySelector('.square2');
const squareThree = document.querySelector('.square3');
const squareFour = document.querySelector('.square4');
squareOne.textContent = 7;
squareTwo.textContent = 8;
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
squareSixteen.textContent = "/";

//Função pra por um event listener em cada número/operação
square.forEach((div) => {
    console.log(div.textContent);
    const numberValue = parseFloat(div.textContent.trim());
    
    if (!isNaN(numberValue) && typeof numberValue === 'number') {
        // If it's a valid number, add the 'number' class
        div.classList.add('number');
    }
});

function selectNum () {
squareOne.addEventListener('click', () => {
    screenResult.textContent = squareOne.textContent;
    firstNumber = squareOne.textContent;
    console.log(firstNumber);
});

squareSixteen.addEventListener('click', () => {
    operatorElement = squareSixteen.textContent;
    console.log(operatorElement);
});

squareTen.addEventListener('click', () => {
    secondNumber = squareTen.textContent
    console.log(secondNumber);
});

squareFifteen.addEventListener('click', () => {
    let result = (operate(firstNumber, secondNumber, operatorElement));
    screenResult.textContent = result;
    return result;
});

}

selectNum();

// function selectNumber() {
//     for (let i = 1; i <= 16; i++) {
//     const box = document.querySelector(`.square${i}`);
//     box.addEventListener('click', () => {
//     if(firstNumber === 0) {
//         if(box.classList.contains('square1')) {
//             firstNumber = 7;
//             console.log(firstNumber)

//         }
//        else if (box.classList.contains('square2')) {
//             firstNumber += 8;
//        }
//        else if (box.classList.contains('square3')) {
//             firstNumber += 9;
//        }
//        else if (box.classList.contains('square5')) {
//             firstNumber += 4;
//        }
//        else if (box.classList.contains('square6')) {
//             firstNumber += 5;
//        }
//        else if (box.classList.contains('square7')) {
//             firstNumber += 6;
//        }
//        else if (box.classList.contains('square9')) {
//             firstNumber += 1
//        }
//        else if (box.classList.contains('square10')) {
//             firstNumber += 2
//        }
//        else if (box.classList.contains('square11')) {
//             firstNumber += 3
//        }
//        screenResult.textContent = firstNumber;
//     }

//     else if (firstNumber !== 0) {
//         if(box.classList.contains('square1')) {
//             firstNumber = "7";
//         }
//        else if (box.classList.contains('square2')) {
//             firstNumber = "8";
//        }
//        else if (box.classList.contains('square3')) {
//             firstNumber = "9";
//        }
//        else if (box.classList.contains('square5')) {
//             firstNumber = "4";
//        }
//        else if (box.classList.contains('square6')) {
//             firstNumber = "5";
//        }
//        else if (box.classList.contains('square7')) {
//             firstNumber = "6";
//        }
//        else if (box.classList.contains('square9')) {
//             firstNumber = "1"
//        }
//         else if (box.classList.contains('square10')) {
//             firstNumber = "2"
//        }
//         else if (box.classList.contains('square11')) {
//             firstNumber = "3";
//        }
//        else if (box.classList.contains('square14')) {
//         firstNumber = "0";
//    }
   
//    screenResult.textContent += firstNumber;  
//    let displayNumber = screenResult.textContent;

//  }
//     });
// };
// };

// selectNumber();
