
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/
// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
//debugger;
var findNumbers = function(nums) {
    
  let resultArr = [];

  for (let i = 0; i<nums.length; i++){
    if (nums[i].toString().length % 2 === 0){
      resultArr.push(nums[i]);
    }

  }

  return resultArr.length;

};

console.log(findNumbers([12,345,2,6,7896]));

// Success
// Details 
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Next challenges: