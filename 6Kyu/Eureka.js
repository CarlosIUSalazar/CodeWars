// https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/javascript

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

 /////  Advanced Solutions
//  function sumDigPow(a, b) {
//     var ans = [];
//     while(a <= b){
//       if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
//         ans.push(a);
//       a++;
//     }
//     return ans;
//   }


///
////
// const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

// const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );


/////
// function sumDigPow(a, b) {
//     var arr = [];
//     for (var i = a; i <= b; i++) {
//       var sum = 0;
//       for (var j = 0; j <= String(i).length; j++) {
//         sum += Math.pow(parseInt(String(i)[j]), j+1);  
//         if (sum == i) arr.push(i);
//       }
//     }
//     return arr;
//   }