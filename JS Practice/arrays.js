const arr = new Array(1, 6, 7, 9, 7, 8);

console.log(arr);

console.log(arr.length - 12);

const len = arr.length;

console.log(arr[len - 1]);

const myFunction = (arr) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      newArr.push(arr[i]);
    }
    console.log(`Element at index ${i} is ${arr[i]}`);
  }
  return newArr;
};

console.log(myFunction([1, 2, 3, 4, 5, 6]));

newArr.push(7, 8, 9);

console.log(newArr);

const newArrCopy = [...newArr];

console.log(newArrCopy);

newArrCopy.push(10, 11);

console.log(newArrCopy);

let [nine, ten, eleven] = [9, 10, 11];
console.log(ten);

/////////////////////////////////////////////
// Stringify an array and capitalize each word
//////////////////////////////////////////////
const stringify = (arr) => {
  if (arr.length === 0) {
    return " ";
  } else if (arr.length === 1) {
    return arr;
  } else {
    // uppercase
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1));
    }

    // variables
    let index = arr.length - 1;
    let capitalizedIndex =
      arr[index].charAt(0).toUpperCase() + arr[index].substring(1);
    let conjunction = "and ";
    let insertConjunction = conjunction + capitalizedIndex;

    // insert conjunction
    newArr.splice(index, 1, insertConjunction);
    return newArr.join(", ");
  }
};

const fruits = ["apple", "orange", "pineapple", "banana"];

const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});
const newStringify = (arr) => {
  arrCap = arr.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });

  arrString = myListFormat.format(arrCap);
  return arrString;
};

console.log(newStringify(fruits));
