function add(a,b){
    return (a+b)
}

function subtract(a,b){
    return (a-b)
}

function multiply(a,b){
    return (a*b)
}

function divide(a,b){
    return b!==0?(a/b): "Error";
}

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(firstNumber, operator, secondNumber){
    let num1 = Number(firstNumber)
    let num2 = Number(secondNumber)

    switch(operator){
        case "+": return add(num1,num2);
        case "-": return subtract(num1,num2);
        case "*": return multiply(num1,num2);
        case "/": return divide(num1,num2);
        default: return "Error";
    }
}

const exp = document.querySelector("#expression")
const result = document.querySelector("#result")
const btns = Array.from(document.querySelectorAll(".btn"))

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");

        // If num or decimal point
        if(!isNaN(value) || value == "."){
            if(operator === ""){
                firstNumber += value;
                exp.textContent = firstNumber;
            } else {
                secondNumber += value;
                exp.textContent = `${firstNumber} ${operator} ${secondNumber}`;
            }
        }

        // Operator
        else if (["+","-","*","/"].includes(value)) {
            if (firstNumber !== "" && operator === "") {
                operator = value;
                exp.textContent = `${firstNumber} ${operator}`;
            }
        }

        // Equals
        else if(value === "="){
            if(firstNumber !== "" && secondNumber !== "" && operator !== ""){
                const calcResult = operate(firstNumber, operator, secondNumber)
                result.textContent = calcResult;
                // Reset for next calculation
                firstNumber = calcResult.toString();
                operator = "";
                secondNumber = "";
            }
        }

        // Clear
        else if (value === "C") {
            firstNumber = "";
            operator = "";
            secondNumber = "";
            exp.textContent = "";
            result.textContent = "";
        }

        // Backspace
        else if (value === "BS") {
            if (secondNumber !== "") {
                secondNumber = secondNumber.slice(0, -1);
                exp.textContent = `${firstNumber} ${operator} ${secondNumber}`;
            } else if (operator !== "") {
                operator = "";
                exp.textContent = firstNumber;
            } else if (firstNumber !== "") {
                firstNumber = firstNumber.slice(0, -1);
                exp.textContent = firstNumber;
            }
        }

        // Special (pi, square, %)
        else if (value === "pi") {
            const piValue = Math.PI.toString();
            if (operator === "") {
                firstNumber = piValue;
                exp.textContent = firstNumber;
            } else {
                secondNumber = piValue;
                exp.textContent = `${firstNumber} ${operator} ${secondNumber}`;
            }
        } else if (value === "square") {
            if (firstNumber !== "" && operator === "") {
                firstNumber = (Number(firstNumber) * Number(firstNumber)).toString();
                exp.textContent = firstNumber;
            }
        } else if (value === "%") {
            if (firstNumber !== "" && operator === "") {
                firstNumber = (Number(firstNumber) / 100).toString();
                exp.textContent = firstNumber;
            }
        }

    })
})
