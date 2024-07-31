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
    if (b === 0) {
        display.innerHTML = 'Error: divide by zero';
    } else {
        return a / b;
    }
}

function modulo(a, b) {
    if (b === 0) {
        display.innerHTML = 'Error: divide by zero';
    } else {
        return a % b;
    }
}

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            operator = null;
            return add(a, b);
        case '-':
            operator = null;
            return subtract(a, b);
        case '*':
            operator = null;
            return multiply(a, b);
        case '/':
            operator = null;
            return divide(a, b);
        case '%':
            operator = null;
            return modulo(a, b);
        default:
            return 'Error: operation not supported';
    }
}

let n1 = '';
let n2 = '';
let operator = null;
let result;

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// add listener to each button based on the buttons function (clear, negative/positive, decimal, equals, operator, and number)

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const val = e.target.value;
        if (val === 'AC') {
            display.innerHTML = '';
            n1 = '';
            n2 = '';
            operator = null;
        } else if (val === '+/-') {
            if (typeof n1 === 'string') {
                if (!n1.includes('-')) {
                    n1 = '-' + n1;
                    console.log(n1);
                } else {
                    n1 = n1.replace('-', '');
                    console.log(n1);
                }
                display.innerHTML = n1;
            } else {
                if (!n2.includes('-')) {
                    n2 = '-' + n2;
                } else {
                    n2 = n2.replace('-', '');
                }
                display.innerHTML = n2;
            }
        } else if (val === '=') {
            if (n1 != '.' && n2 != '.') {
                n2 = Number(n2);
                n1 = result = parseFloat(operate(n1, operator, n2).toFixed(3));
                display.innerHTML = n1;
                n2 = '';
            }
        } else if (val === '+' || val === '-' || val === '*' || val === '/' || val === '%') {
            n1 = Number(n1);
            console.log(n1);
            operator = val;
        } else if (Number(val) != NaN && (typeof n1 === 'string' || typeof n2 === 'string')) {
            if (operator === null) {
                if (val === '0' || Number(val) || (val === '.' && !n1.includes('.'))) {
                    n1 = n1 + val;
                }
                display.innerHTML = n1;
            } else {
                if (val === '0' || Number(val) || (val === '.' && !n2.includes('.'))) {
                    n2 += val;
                }
                display.innerHTML = n2;
            }
        }
    })
})



