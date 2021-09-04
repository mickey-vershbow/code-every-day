////////////////////////////////////////////////////////
// Find the largest number in an array.
// If array is empty, the function should return 0.
///////////////////////////////////////////////////////
// ! ITERATIVE
const solution = (numbers) => {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      return (largest = numbers[i]);
    }
  }
};

//! RECURSIVE
function findMax(arr) {
  // Returns the number if list length is 1
  if (arr.length === 1) return arr[0];

  // Returns the greater number between the first two numbers in the array
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  // If array length is 3+
  const subMax = findMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

//! Or, the one-liner. Will cause stack overflow if input is larger than 1,000
function findMax(numbers) {
  return Math.max.apply(0, numbers);
}

//////////////////////////////////////////////////////////////////////////////////
// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u
// as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
//////////////////////////////////////////////////////////////////////////////////

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//////////////////////////////////////////////////////////////////////////
// Write a recursive function that counts down from a given number.
//////////////////////////////////////////////////////////////////////////

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;
  console.log(nextNumber);

  if (nextNumber > 0) {
    console.log(countDown(nextNumber));
  }
}
console.log(countDown(3));

////////////////////////////////////

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
/////////////////////////////////////////////////////////
// Sum an array of numbers without using recursion
/////////////////////////////////////////////////////////
let sum = function (array) {
  // if array length is 0, return 0; otherwise, return array[0] + the sum of remaining array
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

///////////////////////////////////////////////////////////////////
// Write a recursive function to calculate fibonacci sequence
//////////////////////////////////////////////////////////////////
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// console.log(fibonacci(4));

///////////////////////////////////////////////////////////////////
// Write an iterative function to calculate fibonacci sequence
//////////////////////////////////////////////////////////////////

const fibonacci = (n) => {
  // create array 'result' to store the first two numbers in the sequence
  let result = [0, 1];

  // iterate through the numbers up to n, starting at index 2.
  // On each iteration, store result[i - 1] and result[i -2] in variables 'a' and 'b', and then push 'a+b' into the result array.
  // Once loop quits, return the result array
  for (let i = 2; i <= n; i++) {
    let a = result[i - 1];
    let b = result[i - 2];

    result.push(a + b);
  }
  return result;
};

console.log(fibonacci(8));

//////////////////////////////////////////////////
// reverse individual words in a string in place
/////////////////////////////////////////////////
function reverseFunction(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
// console.log(reverseFunction("This is an example!"));

function reverseWords(str) {
  let reversed;
  let newArray = [];
  reversed = str.split(" ");
  console.log(reversed);
  for (var i = 0; i < reversed.length; i++) {
    newArray.push(reversed[i].split("").reverse().join(""));
    console.log(newArray);
  }
  return newArray.join(" ");
}

// console.log(reverseWords("This is an example!"));
