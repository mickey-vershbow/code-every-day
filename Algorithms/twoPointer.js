// Array example
let arr = ["!", "cake", "that", "me", "give"];

/////////////////////////
// Two-Pointer Solution
/////////////////////////

// set pointer #1 that will keep track of the first index in array
let counter = 0;

let reverseWords = () => {
  // Loop backwards through the array, setting [i] as 2nd pointer to keep track of last index in array, iterating the counter on each iteration through the loop
  for (let i = arr.length - 1; i >= counter; i--) {
    // store the last item in the array in a temp var
    let tempVar = arr[i];
    // set the last index in array to the first index in array
    arr[i] = arr[counter];
    // Set the first item in array to the last item that we stashed in variable
    arr[counter] = tempVar;

    // ITERATE counter, not [i] var
    counter++;
  }
  
  console.log(arr);
};

reverseWords();
