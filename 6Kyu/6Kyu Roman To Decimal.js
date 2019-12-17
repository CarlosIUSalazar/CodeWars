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