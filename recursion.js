//! Find max number in array

function findMax(arr) {
  // Returns the number if list length is 1
  if (arr.length === 1) return arr[0];

  // Returns the greater number between the first two numbers in the array
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  // If array length is 3+
  const subMax = findMax(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}
