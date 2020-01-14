//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
//A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the 
// digits of n. If that value has more than one digit, continue reducing in this way until a single-digit 
// number is produced. This is only applicable to the natural numbers.
//debugger;
//let result = 0;
//let digits = [];

function digital_root(n) {
    let result = 0;
    let digits = [];
    digits = n.toString().split('').map(Number)  
    for (let i = 0; i < digits.length; i++){
       result += digits[i];
    } 
  
    if (result >= 10)
    digits = [];
    let result2 = 0
    digits = result.toString().split('').map(Number)  
    for (let i = 0; i < digits.length; i++){
      result2 += digits[i];
    } 
    return result2
  }