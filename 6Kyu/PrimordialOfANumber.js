// // 6Kyu Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the 
//natural numbers get multiplied, only prime numbers are multiplied //
//to calculate the primorial of a number. It's denoted with P#.

// Task
// Given a number N , calculate its primorial. !alt !alt

// Notes
// Only positive numbers will be passed (N > 0) .



function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) 
        return false;
    }
  
    return number > 1;
  }
  
  function numPrimorial(num){
      let total = 1;
      let primesArray = [];
      let primesToMultiply = [];
  
      for (let i = 2; i<10000; i++){
  
        if (isPrime(i) === true){
          primesArray.push(i);
        }
  
      }
  
      //console.log("Prime array", primesArray);
  
      for (let j = 0; j < num; j++){
        primesToMultiply.push(primesArray[j]);
      }
  
      console.log("Primes to multiply", primesToMultiply);
  
      for (let item of primesToMultiply){
        total *= item;
      }
  
      return total;
  
  }
  
   
  
  console.log(numPrimorial(5));
  
  