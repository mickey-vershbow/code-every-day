////////////////////////////////////////////////////////////////
// Reverse words in a string, retain spacing and order of words
////////////////////////////////////////////////////////////////
// One liner. Split the string into indvidual characers,
// reverse the array of characters, and then rejoin. Words are reversed, but now sentence is backwards too
// split into individual words, reverse the words, and rejoin
const removeDuplicates = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};
console.log(removeDuplicates("This is an example!"));

//! Iteration
const removeDuplicates2 = (str) => {
  // Chop the string into individual word substrings and store in variable 'reversedStr'
  let reversedStr = str.split(" ");
  console.log(reversedStr);
  // initialize new array to push reversed words into
  let newArray = [];
  // loop through the array of characters in reversedStr
  // on each iteration, split each word into it's own array, reverse the word, and rejoin

  for (let i = 0; i < reversedStr.length; i++) {
    newArray.push(reversedStr[i].split("").reverse().join(""));
    console.log(newArray);
  }
  // return the new array as a string
  return newArray.join(" ");
};

console.log(removeDuplicates2("This is an example!"));
