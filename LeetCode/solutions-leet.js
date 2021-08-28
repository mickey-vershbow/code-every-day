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
