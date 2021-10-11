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
