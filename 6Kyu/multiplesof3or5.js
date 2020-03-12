function solution(number){

    let multOf3Or5 = []
    let total = 0
    
    for (let i = 1; i < number; i++) {
    
      if (i%3 === 0 || i%5 === 0){
        multOf3Or5.push(i);
      }
    }
    
    for (let j = 0; j<multOf3Or5.length; j++){
      total += multOf3Or5[j];
    }
      return total;
    }  
    console.log(solution(10));