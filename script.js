let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let isResultDisplayed = false;

function appendNumber(number) {
    if (isResultDisplayed) {
        currentInput = ''; 
        isResultDisplayed = false;
    }
    currentInput += number;
    display.value = previousInput + ' ' + operator + ' ' + currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && previousInput !== '') {
        operator = op;
        display.value = previousInput + ' ' + operator;
        return;
    }
    if (previousInput === '') {
        previousInput = currentInput;
        currentInput = '';
    }
    operator = op;
    display.value = previousInput + ' ' + operator;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = previousInput + ' ' + operator + ' ' + currentInput;
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operator === '') {
        return;
    }

    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = previousInput + ' ' + operator + ' ' + currentInput + ' = ' + result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    isResultDisplayed = true; 
}
