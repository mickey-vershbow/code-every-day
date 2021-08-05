// CodeWars Solutions

// Find the largest number in an array. If array is empty, the function should return 0.

const solution = (numbers) => {
    let largest = numbers[0];
       for (let i = 0; i < numbers.length; i++) {
           if (largest < numbers[i]) {
            return largest = numbers [i];
            }
       }
};

// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
