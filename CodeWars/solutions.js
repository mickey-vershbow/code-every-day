////////////////////////////////////////////////////////////////
// Reverse words in a string, retain spacing and order of words
////////////////////////////////////////////////////////////////

function reverseFunction(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseFunction("This is an example!"));

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

console.log(reverseWords("This is an example!"));
