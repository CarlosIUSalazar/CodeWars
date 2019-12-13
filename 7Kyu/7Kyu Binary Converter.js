// CONSOLE WARS 7 KYU Given an array of ones and zeroes, convert the equivalent binary value to an integer.

function binaryArrayToNumber(arr) {

  let total = 0;
  arrRev = arr.reverse();

  for (i=0; i < arrRev.length; i++){
    total += arrRev[i]*((2)**(i));
  }

  return total;

};