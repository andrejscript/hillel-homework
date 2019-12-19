'use strict'

// // //
// Call average calculator

let firstNumber = null;
let secondNumber = null;
let result = null;

mainLoop: while (true) {
    let operator = prompt('Выберите и введите математический оператор "+,-,*,/"');

    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
        alert('Ok Lets go!');
    } else {

        alert('Enter right operator');
        continue;
    }

    firstNumber = +prompt("Pls enter value № 1");
    secondNumber = +prompt("Pls enter value № 2");

    if (isNaN(firstNumber)) {
        alert("First value is not a number! Try again");
        continue;
    } else if (isNaN(secondNumber)) {
        alert("Second value is not a number! Try again");
        continue;
    }

    if (operator == "+") {
        result = (firstNumber + secondNumber);
    } else if (operator == "-") {
        result = (firstNumber - secondNumber);
    } else if (operator == "*") {
        result = (firstNumber * secondNumber);
    } else if (operator == "/") {
        result = (firstNumber / secondNumber);
    }
    alert(result);
    break mainLoop;
}