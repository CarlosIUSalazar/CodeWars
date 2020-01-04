// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// 31 Dec 2019
function firstNonRepeatingLetter(s) {
    // Add your code here
    let hist = {};
    let preResult = "";
    let result = "";
    for (let i = 0; i< s.length; i++){
        let char = s[i].toLowerCase();
        if (char in hist){
            hist[char]++;
        } else {
            hist[char] = 1;
        }
    }
    console.log(hist)
  
    for  (let key in hist){
      if (hist[key]===1){
        preResult = key;
        break;
      }
    }
  
    for (let i = 0; i<=s.length;i++){
      if (s[i] === preResult  || s[i] === preResult.toUpperCase()){
        result = s[i]
      }
    }

    return result;
  
  }
  console.log(firstNonRepeatingLetter('stress'));

  // ADVANCED SOLUTIONS  https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript
  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }
  ///////
  function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }
  ///////

  function firstNonRepeatingLetter(str){
    return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
  }
  /////
  function firstNonRepeatingLetter(s) {
    var search = s.toLowerCase();
    
    for (var i = 0; i < search.length; ++i) {
        var str = search.slice(0, i) + search.slice(i + 1);
        if((str.indexOf(search[i]) === -1)) {
            return s[i];
        }
    }
    return '';
}
/////
function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }

  /////
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}