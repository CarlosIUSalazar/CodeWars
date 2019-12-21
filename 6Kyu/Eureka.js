function sumDigPow(a, b) {
  let arrAB = [];
  for (let i=0; a <= b; i++) {
    arrAB.push(a);
    a++;
  }
  //console.log(arrAB);

  let result = [];
  let totalTemp = 0;
  let counter = 1;
  let temp = []

  for (let i = 0; i < arrAB.length; i++){
    temp = arrAB[i].toString().split('');
    //console.log(temp);
    for (let j = 0; j < temp.length; j++){
      totalTemp += temp[j]**counter;
      counter++
      console.log(totalTemp)
    }
    if (totalTemp === arrAB[i]){
      result.push(totalTemp);
    }

    totalTemp = 0;
    counter = 1;
    console.log(totalTemp)
  }

return result;

}

 console.log(sumDigPow(8,200))