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
  ///ADVANCED SOLUTIONS  https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

////
  function digital_root(n) {
    if (n < 10) return n; 
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

////
  function digital_root(n) {
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }

  ////
  function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}


/////
function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  }

  ////

  function digital_root(n) {
    return--n%9+1;
  }

  ///
  function digital_root(n) {
    while (n > 9) { n = (''+n).split('').reduce(function(s,d) {return +s + +d;}); }
    return n;
  }