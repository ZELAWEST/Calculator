let display = document.querySelector('.display')
let operatorButtons = document.querySelectorAll('.operator')
let digitButtons = document.querySelectorAll('.digit')
let equal = document.querySelector('.equals')
let clear = document.querySelector('#clear')
let dot = document.querySelector('.dot')

function additionOperation(a, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a + b
}
function subtractionOperation(a, b) {
    return a - b
}
function divisionOperation(a, b) {
    return a / b
}
function multiplicationOperation(a, b) {
    return a * b
}
let firstNumber = ''
let operator = ''
let secondNumber = ''
let displayContent = ''

function operate(firstNumber, secondNumber, operator) {
    let answer = 0
    switch (operator) {

        case "*":
            answer = multiplicationOperation(firstNumber, secondNumber)
            break;

        case "/":
            answer = divisionOperation(firstNumber, secondNumber)
            break

        case "+":
            answer = additionOperation(firstNumber, secondNumber)
            break;
        case "-":
            answer = subtractionOperation(firstNumber, secondNumber)
            break;
    }

    return answer.toFixed(2)
}