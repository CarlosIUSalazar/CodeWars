// Complete the solution so that it splits the string into pairs of 
//two characters. If the string contains an odd number of characters 
//then it should replace the missing second character of the final 
//pair with an underscore ('_').
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    newArr = [];
    let strAsArr = str.split('');
    let counter = 0;
    let newString = '';
  
    for (let i=0; i<str.length; i++){
  
      if (counter < 2) {
        newString += str[i]
        counter++;
        console.log(newString)
        if (counter === 2){
          newArr.push(newString);
          counter = 0;
          newString = '';
        }
      }
    }
  
    if (str.length % 2 != 0){
      newArr.push(str[str.length-1] + '_')
    }
  
  console.log(strAsArr);
  return newArr;
  
  }
  
  console.log(solution('aslkdfj'));