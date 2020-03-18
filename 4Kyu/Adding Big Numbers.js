// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

///// Dont work with massive numbers
// function add(a, b) {
//     return total.toString() = Number(a) + Number(b)
//   }

  //// Alternative Solution
  function add(a, b) {
    let total = "",
      c = 0;
    a = a.split("");
    b = b.split("");
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      total = (c % 10) + total;
      c = c > 9;
    }
    return total;
  }