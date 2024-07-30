function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function modulo (a,b) {
    return a % b;
}

function operate (a,operator,b) {
    switch(operator) {
        case '+':
            operator = null;
            return add(a,b);
        case '-':
            operator = null;
            return subtract(a,b);
        case '*':
            operator = null;
            return multiply(a,b);
        case '/':
            operator = null;
            return divide(a,b);
        case '%':
            operator = null;
            return modulo(a,b);
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
console.log(display);
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const val = e.target.value;
        if (val === 'AC') {
            display.innerHTML = '';
            n1 = '';
            n2 = '';
            operator = null;
        }
        else if (val === '=') {
            if (n1 != '.' && n2 != '.' && String(n1.contain)) {
                n2 = Number(n2);
                result = operate(n1, operator, n2);
                display.innerHTML =  result;
                n1 = result;
                n2 = '';
            }
        } else if (val === '+' || val === '-' || val === '*' || val === '/' || val === '%') {
            n1 = Number(n1);
            operator = val;
            console.log('o: ' + operator);
        } else if (Number(val) != NaN) {
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



