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

function getCalculation() {
    operatorButtons.forEach(ope => {

        ope.addEventListener('click', e => {
            display.textContent = ''
            if (secondNumber == '') {
                operator = e.target.textContent

            } else {
                checkSecondNumber(e)
            }
            console.log(firstNumber)
            console.log(operator)
        })

    })

    digitButtons.forEach(digit => {
        digit.addEventListener('click', e => {
            if (operator == '') {
                firstNumber += e.target.textContent
                display.textContent = firstNumber + " " + operator
                console.log(firstNumber)
            } else if (operator != '') {
                secondNumber += e.target.textContent
                console.log(firstNumber[firstNumber.length - 1] == '.')
                if (firstNumber[firstNumber.length - 1] == '.'){
                    let temp = firstNumber.slice(0,firstNumber.length - 1)
                    console.log(temp)
                    firstNumber = ''
                    firstNumber = temp

                }
                if(firstNumber != '' && secondNumber != ''){
                    display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber
                }else{
                    display.textContent = ''
                    operator = ''
                    firstNumber = ''
                    secondNumber = ''

                }
                    
            }
           
        })
    })

}
dot.addEventListener('click', e => {
    if (!firstNumber.includes('.') && firstNumber != '') {
        firstNumber += '.'
    } else if (!firstNumber.includes('.') && firstNumber == '') {
        firstNumber += '0.'
        display.textContent = firstNumber
    }
    if (!secondNumber.includes('.') && secondNumber != '') {
        secondNumber += '.'
    } else if (!operator == '' && !secondNumber.includes('.') && secondNumber == '') {
        secondNumber += '0.'
        display.textContent = secondNumber
    }
})