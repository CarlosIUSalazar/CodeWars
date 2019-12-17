function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  

  let length = roman.length;
  let total = 0;

for (let i=0; i<length; i++){

if (roman[i]+roman[i+1]=== 'CM') {
    total += 900;
    i++
} else if (roman[i]+roman[i+1]=== 'CD'){
    total += 400;
    i++
} else if (roman[i]+roman[i+1]=== 'XC'){
  total += 90;
  i++
} else if (roman[i]+roman[i+1]=== 'XL'){
  total += 40;
  i++
} else if (roman[i]+roman[i+1]=== 'IX'){
  total += 9;
  i++
} else if (roman[i]+roman[i+1]=== 'IV'){
  total += 4;
  i++
} else {

    if (roman[i]=== 'M'){
      total += 1000
    }
    if (roman[i]=== 'D'){
      total+=500
    }
    if (roman[i] === 'C'){
      total+=100
    }
    if (roman[i] === 'L'){
      total+=50
    }
    if (roman[i] === 'X'){
      total+=10;
    }
    if (roman[i] === 'V'){
      total+=5;
    }
    if (roman[i] === 'I'){
      total+=1;
    }
  
  }  

  }

  return total;

}

console.log("The total is: "+ solution('MDCLXVI'))

// // Advanced Solutions:
// function solution(roman){
//     var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
//     return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
//  }

//  ///////
//  function solution(roman){
//     var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
//     return roman.split('').reverse().reduce(
//         function(dec,c,i,rr){ 
//             c=rom[c];
//             i=rom[rr[i-1]]||0; 
//             return dec + (i<=c? c: -c) }
//         ,0
//     )
// }

// /////
// function solution(roman) {
//     var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
//     return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
//   }