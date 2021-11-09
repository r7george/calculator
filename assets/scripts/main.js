const operations = document.querySelector("#operations");
const output = document.querySelector("#output");

const buttons = document.querySelectorAll("button");
const subOperatorBtns = document.querySelectorAll(".calculator__keypad__sub-operator");
const mainOperatorBtns = document.querySelectorAll(".calculator__keypad__main-operator");
const equals = document.querySelector(".calculator__keypad__equals");
const numberBtns = document.querySelectorAll(".calculator__keypad__number");

let currentScreen = "";
let firstNumber = 21;
let operator;
let secondNumber = 7;
const calculator = {
  number1: firstNumber,
  operation: operator,
  number2:secondNumber
};


// used to write the equation on the screen
const writeOperation = (event) => {
  operations.innerHTML += event.target.value;
  currentNumber = operations.innerHTML;
}

// used to clear calculator inputs
const clearCalculation = () => {
  operations.innerHTML = "";
  currentNumber = ""
  operator="";
}

// sets the operator variable
const getOperator = (event) => {
  if (event.target.value === "/") {
    operator = "divide";
    console.log(operator);
  }
  else if (event.target.value === "*") {
    operator = "times";
    console.log(operator);
  }
  else if (event.target.value === "+") {
    operator = "plus";
    console.log(operator);
  }
  else if (event.target.value === "-") {
    operator = "minus";
    console.log(operator);
  }
}

// used for the final equal sign
const finalEqual = (event) => {
  if (operator === "divide") {
    output.innerHTML = (firstNumber / secondNumber);
    firstNumber = (firstNumber / secondNumber);
    operator = "";    
  }
  else if (operator === "times") {
    output.innerHTML = (firstNumber * secondNumber);
    firstNumber = (firstNumber * secondNumber);
    operator = "";
  }
  else if (operator === "plus") {
    output.innerHTML = (firstNumber + secondNumber);
    firstNumber = (firstNumber + secondNumber);
    operator = "";
  }
  else if (operator === "minus") {
    output.innerHTML = (firstNumber - secondNumber);
    firstNumber = (firstNumber - secondNumber);
    operator = "";
  }
}


const calculating = (event) => {

  if (event.target.className === "calculator__keypad__number") {
    // gets the numbers to appear on the screen
    numberBtns.forEach((number) => {
      number.addEventListener("click", writeOperation);
    });
  }

  else if (event.target.className === "calculator__keypad__sub-operator") {
    // gets the suboperators to appear on the screen
    subOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", writeOperation);
    });
  }

  else if (event.target.className === "calculator__keypad__main-operator") {
    // gets the main operators to appear on the screen
    mainOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", writeOperation);
      operator.addEventListener("click", getOperator);
    });
  }

  else if (event.target.className === "calculator__keypad__equals") {
    equals.addEventListener("click", finalEqual);
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", calculating);
});

subOperatorBtns[0].addEventListener("click", clearCalculation);












