//CODE WARS  Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// and so on..
function rowSumOddNumbers(n) {
  //Create an array of odd numbers
  let x = [];
  for (i = 1; i < 10000000; i++){
    if (i % 2 != 0){
    x.push(i);
    }
  }

  //calculate the sum de n
  let sumN = 0;
  for (let i = 1; i < n; i++){
    sumN += i;
  }

  // Sum the row n in the triangle of numbers and return it.
  let total = 0;
  for (let i = sumN; i<= sumN+(n-1); i++){
    total += x[i]
  }


  return total
}