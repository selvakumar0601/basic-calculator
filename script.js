let currentNumber = "";
let previousNumber = "";
let selectedOperator = null;

const display = document.getElementById("display");


// Add numbers and decimal point
function appendNumber(number) {

    // Prevent multiple decimal points
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    // Prevent multiple leading zeros
    if (currentNumber === "0" && number !== ".") {
        currentNumber = "";
    }

    currentNumber += number;

    display.value = currentNumber;
}


// Select operator
function chooseOperator(operator) {

    if (currentNumber === "") {
        return;
    }

    // If there is already an operation, calculate it first
    if (previousNumber !== "" && selectedOperator !== null) {
        calculate();
    }

    previousNumber = currentNumber;
    currentNumber = "";

    selectedOperator = operator;
}


// Calculate result
function calculate() {

    if (
        previousNumber === "" ||
        currentNumber === "" ||
        selectedOperator === null
    ) {
        return;
    }

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (selectedOperator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.value = "Cannot divide by 0";

                currentNumber = "";
                previousNumber = "";
                selectedOperator = null;

                return;
            }

            result = firstNumber / secondNumber;
            break;

        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = "";
    selectedOperator = null;

    display.value = currentNumber;
}


// Clear calculator
function clearDisplay() {

    currentNumber = "";
    previousNumber = "";
    selectedOperator = null;

    display.value = "0";
}