function add(a,b){
    console.log(a+b)
}

function subtract(a,b){
    console.log(a-b)
}

function multiply(a,b){
    console.log(a*b)
}

function divide(a,b){
    console.log(a/b)
}

let firstNumber = 5
let operator = "+"
let secondNumber = 2

function operate(firstNumber, operator, secondNumber){
    switch(operator){
        case "+": add(firstNumber,secondNumber); break;
        case "-": subtract(firstNumber,secondNumber); break;
        case "*": multiply(firstNumber,secondNumber); break;
        case "/": divide(firstNumber,secondNumber); break;
    }
}

operate(5,"+",2)



function populateDisplay(){

}
