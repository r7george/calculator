const display = document.querySelector("#operations");
const output = document.querySelector("#output");

const buttons = document.querySelectorAll("button");
const subOperatorBtns = document.querySelectorAll(".calculator__keypad__sub-operator");
const mainOperatorBtns = document.querySelectorAll(".calculator__keypad__main-operator");
const equals = document.querySelector(".calculator__keypad__equals");
const numberBtns = document.querySelectorAll(".calculator__keypad__number");


let firstNumber = "";
let operator = "";
let secondNumber = "";
const calculator = {
  number1: firstNumber,
  operation: operator,
  number2:secondNumber
};


// used to write the equation on the screen
const writeOperation = (event) => {
  display.innerHTML += event.target.value;
}

// used to clear calculator inputs
const clearCalculation = () => {
  display.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operator="";
  // output.innerHTML = "";
}

// sets the firstNumber, operator, and secondNumber variable
const setVariable = (event) => {
  if (event.target.className === "calculator__keypad__number" && operator === "") {
    display.innerHTML += event.target.value;
    firstNumber += event.target.value;
    console.log(`${firstNumber}: firstNumber`);
  }
  else if (event.target.className === "calculator__keypad__main-operator" && firstNumber != "") {
    display.innerHTML += event.target.value;
    operator = event.target.value;
    console.log(`${operator}: operator`);
  }
  else if (event.target.className === "calculator__keypad__number" && firstNumber != "" && operator != "") {
    display.innerHTML += event.target.value;
    secondNumber += event.target.value;
    console.log(`${secondNumber}: secondNumber`);
  }
}

// sets the operator variable
// const getOperator = (event) => {
//   if (event.target.value === "/") {
//     operator = "divide";
//     console.log(operator);
//   }
//   else if (event.target.value === "*") {
//     operator = "times";
//     console.log(operator);
//   }
//   else if (event.target.value === "+") {
//     operator = "plus";
//     console.log(operator);
//   }
//   else if (event.target.value === "-") {
//     operator = "minus";
//     console.log(operator);
//   }
// }

// used for the final equal sign
const finalEqual = () => {
  if (operator === "/") {
    output.innerHTML = (parseFloat(firstNumber) / parseFloat(secondNumber));
    firstNumber = toString(parseFloat(firstNumber) / parseFloat(secondNumber));
    operator = ""
    display.innerHTML = "";    
  }
  else if (operator === "*") {
    output.innerHTML = (parseFloat(firstNumber) * parseFloat(secondNumber));
    firstNumber = toString(parseFloat(firstNumber) * parseFloat(secondNumber));
    operator = ""
    display.innerHTML = "";
  }
  else if (operator === "+") {
    output.innerHTML = (parseFloat(firstNumber) + parseFloat(secondNumber));
    firstNumber = (firstNumber + secondNumber);
    operator = "";

  }
  else if (operator === "-") {
    output.innerHTML = (parseFloat(firstNumber) - parseFloat(secondNumber));
    // firstNumber = (firstNumber - secondNumber);
    // operator = "";
    // display.innerHTML = "";
  }
}


const calculating = (event) => {

  if (event.target.className === "calculator__keypad__number") {
    numberBtns.forEach((number) => {
      number.addEventListener("click", setVariable);
    });
  }

  else if (event.target.className === "calculator__keypad__sub-operator") {
    subOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", writeOperation);
    });
  }

  else if (event.target.className === "calculator__keypad__main-operator") {
    mainOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", setVariable);
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












