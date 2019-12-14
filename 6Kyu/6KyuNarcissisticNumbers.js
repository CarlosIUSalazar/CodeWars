// 6 Kyu Does my number look big in this?
//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//For example, take 153 (3 digits):
//    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
function narcissistic(value) {
  // Code me to return true or false
  let valueString = value.toString();
  let newArr = valueString.split('');

  let total = 0;

  for (i=0; i<= newArr.length-1; i++){
    total += newArr[i]**newArr.length;
    console.log(total);
  }

  if (total === value){
    return true;
  } else {
    return false;
  }

}
console.log(narcissistic(153))