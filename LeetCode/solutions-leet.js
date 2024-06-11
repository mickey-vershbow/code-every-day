//////////////////////////////////////////////
// Remove Duplicates From An Array In Place
//////////////////////////////////////////////

// Optimal Solution:
//since array is already sorted, all ocurences will appear next to each other
//if the next element is same as the current element splice it
//otherwise just move to the next element
//For instance in array [1, 1, 2]
//Since nums[0] === nums[1]; splice nums[1]
//Splice alters the array in place so length will become now 2
// Dont increment i; compare nums[0] with nums[0+1] (i.e. 2 now)
//Since nums[0]!==nums[1] (1!==2) so increment i
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i += 1;
    }
  }
  return nums.length;
};

//! Initial Attempts:
const removeDuplicates2 = (nums) => {
  nums.forEach((ele, index) => {
    nums.forEach((e, i) => {
      if (ele === e && index !== i) {
        nums.splice(index, 1);
      }
    });
  });
  //   console.log(nums);
};

const removeDuplicates3 = (nums) => {
  // length = nums.length
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
  //   return nums.length
};

/////////////////////////////////////////////////////
// TwoSum -- find two integers that add up to target
/////////////////////////////////////////////////////
var twoSum = function (nums, target) {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

var twoSum2 = function (nums, target) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map.get(num) === undefined) map.set(target - num, i);
    else return [map.get(num), i];
  }
};

////////////////////////////////////////
// Roman to Integer
////////////////////////////////////////
var romanToInt = function (s) {
  let answer = 0;
  //if these scenarios do diff - break apart and add but pay attn
  let answerArr = s.split("");
  //loop through and add up each in arr
  answerArr.forEach((ele, i) => {
    //add check here for alt cases
    if (ele === "I") {
      //if alt situation, pop out next # from arr so doesn’t add number twice
      answerArr[i + 1] === "V"
        ? ((answer = answer + 4), answerArr.splice(i + 1, 1))
        : answerArr[i + 1] === "X"
        ? ((answer = answer + 9), answerArr.splice(i + 1, 1))
        : (answer = answer + 1);
    } else if (ele === "V") {
      answer = answer + 5;
    } else if (ele === "X") {
      answerArr[i + 1] === "L"
        ? ((answer = answer + 40), answerArr.splice(i + 1, 1))
        : answerArr[i + 1] === "C"
        ? ((answer = answer + 90), answerArr.splice(i + 1, 1))
        : (answer = answer + 10);
    } else if (ele === "L") {
      answer = answer + 50;
    } else if (ele === "C") {
      // console.log(answerArr[i + 1])
      answerArr[i + 1] === "D"
        ? ((answer = answer + 400), answerArr.splice(i + 1, 1))
        : answerArr[i + 1] === "M"
        ? ((answer = answer + 900), answerArr.splice(i + 1, 1))
        : (answer = answer + 100);
    } else if (ele === "D") {
      answer = answer + 500;
    } else if (ele === "M") {
      answer = answer + 1000;
    }
    console.log(answerArr, answer);
  });
  return answer;
};

/////////////////////////////////////////
// Linked List Cycle (LC141)
//////////////////////////////////////////

const hasCycle = function (linkedList) {
  let tortoise = linkedList;
  let hare = linkedList;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true;
    }
  }
  return false;
};

console.log(hasCycle([3, 2, 0, -4]));

///////////////////////////////////////////
// Return a list of multiples up to limit
///////////////////////////////////////////

// In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

const multiples = (val, limit) => {
  let answer = [];
  //create arr with #s mult 5 up to 25
  for (let i = 1; i <= limit; i++) {
    if (i % 5 === 0) {
      answer.push(i);
    }
  }

  console.log(answer);
};

multiples(5, 25);

//////////////////////
// Sort and Star
//////////////////////
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have “***” between each of its letters.
// You should not remove or add elements from/to the array.

const twoSort = (arr) => {
  let answer = arr.sort();
  answer = answer[0].split("").join("***");
  return answer;
};

twoSort([
  "i",
  "want",
  "to",
  "travel",
  "the",
  "world",
  "writing",
  "code",
  "one",
  "day",
]);

//////////////////////////////////////
// LeetCode -- Longest Common Prefix
//////////////////////////////////////
const longestCommonPrefix = (strs) => {
  let prefix = "";
  // return empty string if length is 0
  if (strs.length === 0) return prefix;
  //
  for (let i = 0; i < strs[0].length; i++) {
    console.log(i);
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

//////////////////////////////////////////////////
// Leetcode #88 Merge Sorted Arrays
/////////////////////////////////////////////////

const merge = (nums1, m, nums2, n) => {
  // create two pointers and set them to the end of each array. Pointer1 will loop through nums1, Pointer2 will loop through nums2
  let p1 = m - 1;
  let p2 = n - 1;

  // loop backwards through m+n, set i to begin at the end of the array and decrement with each iteration
  for (let i = m + n - 1; i >= 0; i--) {
    // if pointer 2 (looping through nums2) is less than zero, break the loop
    if (p2 < 0) break;

    // if pointer1 is bigger than pointer 2, than nums[i] = value of pointer1. Decrement pointer1 and i.
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
      // ELSE, if pointer1 is less than pointer2, set nums[i] to value of pointer2 and decrement pointer2
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//! FASTER VERSION
const merge2 = (nums1, m, nums2, n) => {
  // set insertPos to index position 5
  let insertPos = m + n - 1;

  // set m and n to the last index in the arrays
  m--;
  n--;
  // loop through nums2, set the nums1[insertPos] to either nums1[m] or nums2[n] based on condition, and decrement the loop.
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  return nums1;
};

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/////////////////////
// Palindrome Number
/////////////////////

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let splitStr = str.split("");
  let reversed = [];

  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversed.push(splitStr[i]);
  }
  return splitStr.join("") === reversed.join("") ? true : false;
};

console.log(isPalindrome(-121));
