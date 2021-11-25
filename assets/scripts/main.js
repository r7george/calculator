const display = document.querySelector("#operations");
const output = document.querySelector("#output");

const subOperatorBtns = document.querySelectorAll(".calculator__sub-operator");
const mainOperatorBtns = document.querySelectorAll(".calculator__main-operator");
const equals = document.querySelector(".calculator__equals");
const numBtns = document.querySelectorAll(".calculator__number");

let firstNumber = "";
let operator = "";
let secondNumber = "";


// gets the value for any event
const getValue = (event) => {
  return event.target.value;
}

// gets the id for the event in question
const getId = (event) => {
  return event.target.id;
}

// resets a variable to an empty string
const resetVariable = (variable) => {
  variable = "";
  return variable;
}


// function for the numberBtn event listener
const handleNumClick = (event) => {
  const val = getValue(event);
  // to stop decimals appearing multiple times
  if (val == "." && firstNumber.includes(val) && secondNumber == "") {
    return;
  } else if (val == "." && secondNumber.includes(val)) {
    return;
  }

  if (operator == "") {
    firstNumber += val;
    display.innerHTML = firstNumber;
  } else if (firstNumber != "" && operator != "") {
    secondNumber += val;
    display.innerHTML = `${firstNumber}${operator}${secondNumber}`;
  }
}


// function for the mainOperatorBtns event listener
const handleMainClick = (event) => {
  const val = getValue(event);
  if (secondNumber != "") {
    return;
  }
  if (firstNumber != "") {
    operator = val;
    display.innerHTML = `${firstNumber}${operator}`;
  }
}


// function for the subOperatorBtns event listener
const handleSubClick = (event) => {
  // for AC
  if (getId(event) == "ac") {
    display.innerHTML = "";
    firstNumber = resetVariable(firstNumber);
    secondNumber = resetVariable(secondNumber);
    operator = resetVariable(operator);
  }
  // for +/-
  else if (getId(event) == "plusMinus") {
    if (firstNumber != "" && operator == "") {
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
  // for %
  else if (getId(event) == "percent") {
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


// function for the equal event listener
const handleEqualClick = () => {
  if (secondNumber == "") {
    return;
  }

  let finalNumber = 0;
  if (operator === "/") {
    finalNumber = (parseFloat(firstNumber) / parseFloat(secondNumber)).toPrecision(6);
  } else if (operator === "*") {
    finalNumber = (parseFloat(firstNumber) * parseFloat(secondNumber)).toPrecision(6);
  } else if (operator === "+") {
    finalNumber = (parseFloat(firstNumber) + parseFloat(secondNumber)).toPrecision(6);
  } else if (operator === "-") {
    finalNumber = (parseFloat(firstNumber) - parseFloat(secondNumber)).toPrecision(6);
  }
  
  output.innerHTML = finalNumber;
  firstNumber = finalNumber.toString();
  operator = resetVariable(operator);
  secondNumber = resetVariable(secondNumber);
}


// ALl the required event listeners
numBtns.forEach((button) => {
  button.addEventListener("click", handleNumClick);
});

mainOperatorBtns.forEach((button) => {
  button.addEventListener("click", handleMainClick);
});

subOperatorBtns.forEach((button) => {
  button.addEventListener("click", handleSubClick);
});

equals.addEventListener("click", handleEqualClick);