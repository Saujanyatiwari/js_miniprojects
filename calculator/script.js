// script.js

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('results');
    console.log(display);
    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
        // console.log(display.textContent);
        
    }

    function handleDigit(digit) {
        if (waitingForSecondOperand) {
            currentInput = digit;
            waitingForSecondOperand = false;
        } else {
            currentInput = currentInput === '0' ? digit : currentInput + digit;
        }
        updateDisplay();
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);

        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
        }

        if (firstOperand == null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](firstOperand, inputValue);
            currentInput = String(result);
            firstOperand = result;
        }

        waitingForSecondOperand = true;
        operator = nextOperator;
        updateDisplay();
    }

    const performCalculation = {
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    };

    function handleClear() {
        currentInput = '0';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }

    function handleEqual() {
        if (operator && !waitingForSecondOperand) {
            handleOperator(operator);
            operator = null;
        }
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const { value } = event.target;

            if (value >= '0' && value <= '9') {
                handleDigit(value);
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                handleOperator(value);
            } else if (value === '=') {
                handleEqual();
            } else if (value === 'delete') {
                handleClear();
            }
        });
    });

    updateDisplay();
});