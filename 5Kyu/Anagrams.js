// 5kyu Where my anagrams at?
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
//debugger;
function anagrams(word, words) {
  let resultArray = [];
  let newWordArr = word.split('');
  let tempWord = '';
  let sortedWord = word.split('').sort().join();
  
  for (let i = 0; i < words.length; i++) {
    tempWord = words[i].split('').sort().join();
    if (tempWord === sortedWord) {
      resultArray.push(words[i])
    }
  }
  return resultArray;
}

console.log(anagrams('perro',['roepr','rorpe','rompe','mamar']));



// /////  Advanced solutions  https://www.codewars.com/kata/523a86aa4230ebb5420001e1/solutions/javascript
// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }


// /////
// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
// }

// /////

// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));


// ////



