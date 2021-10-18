// const arr = [2, 4, 9, 14, 23, 7];

function insertionSort(arr) {
  // loop through array starting at index 1, store value of arr[i] in variable called cur
  // initiate j variable to iterate through the loop starting at i-1
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    // loop through the array starting at j
    // if j is bigger than curr, move j over one index to the right and decrement j
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    // move j+1 over to the left, effectively swapping the two numbers
    arr[j + 1] = curr;
  }

  return arr;
};

// console.log(insertionSort(arr));

/////////////////////

// function insertionSort2(items) {
//   for (var i = 0; i < items.length; i++) {
//     let value = items[i];
//     // store the current item value so it can be placed right
//     for (var j = i - 1; j > -1 && items[j] > value; j--) {
//       // loop through the items in the sortzxed array (the items from the current to the beginning)
//       // copy each item to the next one
//       items[j + 1] = items[j];
//     }
//     // the last item we've reached should now hold the value of the currently sorted item
//     items[j + 1] = value;
//   }

//   return items;
// }

// const list2 = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(insertionSort2(list2));


module.exports = insertionSort;
