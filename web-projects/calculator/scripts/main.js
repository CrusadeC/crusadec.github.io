let myButton = document.querySelector("button");
let userNumberInput0, userNumberInput1;
let number0, number1;
let setOperation;
let operation = ["+", "-", "x", "*", "/"];
let answer;

userNumberInput0 = prompt("Please enter the first value.", 0);
setOperation = prompt("Please enter an operator (+, -, x, * OR /).");
userNumberInput1 = prompt("Please enter the second value.", 0);

number0 = Number(userNumberInput0);
number1 = Number(userNumberInput1);
operation = Number(setOperation);

output.log (number0, number1, String(operation));