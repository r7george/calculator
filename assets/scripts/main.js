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


// sets the firstNumber, operator, and secondNumber variable
const setVariable = (event) => {
  if (event.target.className === "calculator__keypad__number" && operator === "") {
    display.innerHTML += event.target.value;
    firstNumber += event.target.value;
  }
  else if (event.target.className === "calculator__keypad__main-operator" && firstNumber != "" && operator === "") {
    display.innerHTML += event.target.value;
    operator = event.target.value;
  }
  else if (event.target.className === "calculator__keypad__main-operator" && firstNumber != "" && operator != "") {
    display.innerHTML = `${firstNumber}${event.target.value}`;
    operator = event.target.value;
    secondNumber = "";
  }
  else if (event.target.className === "calculator__keypad__number" && firstNumber != "" && operator != "") {
    display.innerHTML += event.target.value;
    secondNumber += event.target.value;
  }
}


// used for the final equal sign
const pressingEqual = () => {
  if (secondNumber != "") {
    if (operator === "/") {
      const num = (parseFloat(firstNumber) / parseFloat(secondNumber)).toPrecision(6);
      output.innerHTML = num;
      firstNumber = num.toString();
      operator = "";
      secondNumber = "";
    }
    else if (operator === "*") {
      const num = (parseFloat(firstNumber) * parseFloat(secondNumber)).toPrecision(6);
      output.innerHTML = num;
      firstNumber = num.toString();
      operator = "";
      secondNumber = "";
    }
    else if (operator === "+") {
      const num = (parseFloat(firstNumber) + parseFloat(secondNumber)).toPrecision(6);
      output.innerHTML = num;
      firstNumber = num.toString();
      operator = "";
      secondNumber = "";
    }
    else if (operator === "-") {
      const num = (parseFloat(firstNumber) - parseFloat(secondNumber)).toPrecision(6);
      output.innerHTML = num;
      firstNumber = num.toString();
      operator = "";
      secondNumber = "";
    }
  }
}


// used for giving each suboperator the relevant action
const subOperators = (event) => {
  // for clearing input (AC button)
  if (event.target.id === "ac") {
    display.innerHTML = "";
    firstNumber = "";
    secondNumber = "";
    operator="";
  }

  // for the plusMinus operator
  else if (event.target.id === "plusMinus") {
    if (firstNumber != "" && operator === "") {
      const num = (-parseFloat(firstNumber)).toString();
      display.innerHTML = `${num}`;
      firstNumber = num;
    }
    else if (secondNumber != "" && operator != "") {
      const num = (-parseFloat(secondNumber)).toString();
      display.innerHTML = `${firstNumber}${operator}${num}`;
      secondNumber = num;
    }
  }

  // for the percentage operator
  else if (event.target.id === "percent") {
    if (firstNumber != "" && operator === "") {
      const num = (parseFloat(firstNumber)/100).toString();
      display.innerHTML = `${num}`;
      firstNumber = num;
    }
    else if (secondNumber != "" && operator != "") {
      const num = (parseFloat(secondNumber)/100).toString();
      display.innerHTML = `${firstNumber}${operator}${num}`;
      secondNumber = num;
    }
  }

}


// used to set off the flow based on what type of button is pressed
const buttonClassDetermining = (event) => {

  if (event.target.className === "calculator__keypad__number") {
    numberBtns.forEach((number) => {
      number.addEventListener("click", setVariable);
    });
  }

  else if (event.target.className === "calculator__keypad__sub-operator") {
    subOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", subOperators);
    });
  }

  else if (event.target.className === "calculator__keypad__main-operator") {
    mainOperatorBtns.forEach((operator) => {
      operator.addEventListener("click", setVariable);
    });
  }

  else if (event.target.className === "calculator__keypad__equals") {
    equals.addEventListener("click", pressingEqual);
  }
}


buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClassDetermining);
});

subOperatorBtns[0].addEventListener("dblclick", () => {
  output.innerHTML = "";
  display.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operator="";
});