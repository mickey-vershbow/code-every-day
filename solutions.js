// CodeWars Solutions

// Find the largest number in an array. If array is empty, the function should return 0.

const solution = (numbers) => {
    let largest = numbers[0];
       for (let i = 0; i < numbers.length; i++) {
           if (largest < numbers[i]) {
            return largest = numbers[i];
            }
       }
};
//! Or, the one-liner:
function findMax(numbers) {
  return Math.max.apply(0, numbers)
}

// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// Write a recursive function that counts down from a given number.
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);


// Sum an array of numbers without using recursion
let sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}
