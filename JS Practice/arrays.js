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
