// 5kyu Where my anagrams at?
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    
    let resultArray = [];
    let newWordArr = word.split('');
    let tempArray = [];
    let tempWord = [];
    let isAnagram = false;
    for (let i = 0; i < words.length; i++)
    {
      tempWord = words[i].split('');
      //console.log(tempWord)
      for (let j = 0; j< words.length;j++){
        if (newWordArr[i]===tempWord[j]){
          isAnagram = true;
          tempWord[j] = '*';
        }
      }  
      if (isAnagram === true){
        resultArray.push(words[i]);
      }
      isAnagram = false;                
    }
  return resultArray;
  
  }
  console.log(anagrams('perro',['peorr','rorpe','rompe','mama']));