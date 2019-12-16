//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/solutions/javascript
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){

let length = str.length;
let resultArr = [];
let resultStr = '';

if (str === ''){
  return []
  } else {

let count = 0;

    for (let i = 0; i<str.length; i++){ 

      if (str[i] === ' '){  //If the string starts with space add a space
        resultStr += ' ';
      }

        for (let j = 0; j<str.length; j++){
          if (count === j) {
            resultStr += str[j].toUpperCase();
          }  else { 
            resultStr += str[j]
          }  
        }

        if (str[i]!=' '){ //If the current value is empty space do not push this string to the result array otherwise we'll have 'two words' in the middle of the array for arrays with more than 1 word
        resultArr.push(resultStr);
        }
        resultStr = ''
        count++;

  }
return resultArr
  }
}
console.log(wave('hello'))


// Best solution 1
// function wave(str){
//     let result = [];
    
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
    
//     return result;
// }


// // Best solution 2
// var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)