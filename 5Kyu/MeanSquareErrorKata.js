// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

var solution = function(firstArray, secondArray) {
    let resultArray = [];

    for(let i = 0; i<firstArray.length; i++){
        resultArray[i] = ((firstArray[i]-secondArray[i])**2)
    }

    console.log(resultArray)

    return resultArray.reduce((a,b) => a+b)/resultArray.length;
    
}

console.log(solution([1, 2, 3], [4, 5, 6]))

///  Other Solutions:
function solution(a, b) {
    return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
  }


  /////

  function solution(a, b) {
    return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
  }


  ////

  const _ = require('lodash');

function solution(firstArray, secondArray) {
  return _(firstArray).zipWith(secondArray, (x, y) => (x - y) ** 2).mean();
}

/////
const solution = (a, b) => a.reduce((s, va, i) => s + Math.abs(va - b[i]) ** 2, 0) / a.length;
///

const solution = (a, b) => a.reduce((acc, n, i) => (n - b[i]) ** 2 + acc, 0) / b.length;

///

const solution = (a, b) => a.reduce((sum, n, i) => sum + (n - b[i])**2, 0) / a.length;

