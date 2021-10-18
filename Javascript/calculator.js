const calculator = (a, operand, b) => {
  if (operand === "-") {
    result = a - b;
  } else if (operand === "+") {
    result = a + b;
  } else if (operand === "/") {
    result = a / b;
  } else if (operand === "%") {
    result = a % b;
  } else if (operand === "*") {
    result = a * b;
  } else {
    throw new Error("Invalid Operand: " + operand);
  }
  return result;
};

console.log(calculator(2, "+", 4));

/////////////////////////////////
// Accepts any amount of integers
/////////////////////////////////

let result;

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a / b;

let calculatorUnlimited = (numsArr, operand) => {
  if (operand === "+") {
    result = numsArr.reduce(addition);
  } else if (operand === "-") {
    result = numsArr.reduce(subtraction);
  } else if (operand === "*") {
    result = numsArr.reduce(multiply);
  } else if (operand === "/") {
    result = numsArr.reduce(remainder);
  }
  return result;
};

console.log(calculatorUnlimited([2, 2, 2], "*"));
