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
  
  // ADVANCED SOLUTIONS
  function isPrime(num) {
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false
      }
    }
    return true
  }
  
  function numPrimorial(n){
    let arr = []
    let i = 2
    while(arr.length < n){
      if(isPrime(i)){
        arr.push(i)
      }
     i++
    }
    return arr.reduce((a,b) => a * b)
  }
  

  ////
  const numPrimorial = n => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71].slice(0,n).reduce((p,c) => p*c, 1);

  ///
  const getPrimeRange = n => {
    let a = [...new Array(n+1).keys()].filter(x=>x%2).slice(1)
    a.unshift(2)
    return a
  }
  
  const isPrime = n => {
    let begin = Math.floor(Math.sqrt(n))
    let targets = getPrimeRange(begin)
    return targets.every(x => n%x !== 0)
  }
  
  
  const numPrimorial = n => {
    let primes = [2]
    let i = 2
    while (primes.length <= n-1){
      if (isPrime(i)) primes.push(i)
      i++
    }
    return primes.reduce((s,v)=>s*=v)
  }
  

  ///
  numPrimorial=(a,b=2)=>(f=>a?f(b)?b*numPrimorial(--a,++b):1*numPrimorial(a,++b):1)(f=(a,b=2)=>b*b>a?!0:a%b?f(a,++b):!1)

