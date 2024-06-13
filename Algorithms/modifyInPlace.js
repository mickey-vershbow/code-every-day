/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// nums1 has a length of [m+n], the first [m] elements should be merged, the last [n] elements should be ignored
let nums1 = [1, 2, 3, 0, 0, 0];
// nums2 has a length of [n]
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

const merge = () => {
  // Set first pointer to m index at nums1
  let first = m - 1;
  // Set second pointer to n index at nums2
  let second = n - 1;
  // Set i pointer to last index of nums1
  let i = nums1.length - 1;

  // Set while loop to compare values at each pointer, swapping in larger values
  while (second >= 0) {
    // Stash first pointer value in variable
    let fVal = nums1[first];
    let sVal = nums2[second];
    let iVal = nums1[i];

    // Compare values and decrement pointers
    if (sVal > fVal) {
      nums1[i] = sVal;
      i--;
      second--;
    } else {
      nums1[i] = fVal;
      i--;
      first--;
    }
  }

  console.log("nums1: ", nums1);
};

merge();
