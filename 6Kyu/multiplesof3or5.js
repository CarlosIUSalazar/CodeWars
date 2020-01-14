function solution(number){

    let multOf3 = []
    let multOf5 = []
    let total = 0
    
    for (let i = 1; i < number; i++) {
    
      if (i%3 === 0 || i%5 === 0){
        multOf3.push(i);
      }
    }
    
    for (let j = 0; j<multOf3.length; j++){
      total += multOf3[j];
    }
    
    
      return total;
    
    }
    
    console.log(solution(10));