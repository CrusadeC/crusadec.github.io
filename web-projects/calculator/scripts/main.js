let myButton = document.querySelector("button");
let userNumberInput0, userNumberInput1;
let number0, number1;
let setOperation;
let answer;

userNumberInput0 = prompt("Please enter the first value.", 0);
setOperation = prompt("Please enter an operator (+, -, x, * OR /).");
userNumberInput1 = prompt("Please enter the second value.", 0);

number0 = Number(userNumberInput0);
number1 = Number(userNumberInput1);

if (setOperation == "+") {
    alert(number0 + number1);
}
else if (setOperation == "-") {
    alert(number0 - number1);
}
else if (setOperation == "x" || setOperation == "*") {
    alert(number0 * number1);
}
else if (setOperation == "/") {
    alert(number0 / number1);
}
else if (setOperation == "null" || "") {
    setOperation = prompt("Please enter an operator (+, -, x, * OR /).");
}

console.log (number0, number1, setOperation);