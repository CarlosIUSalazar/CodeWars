//debugger;
var nbrOfLaps = function (x, y) {
    
    let result = [];
    let magicNumber = 1;
    
    for (i=2;i<100000;i++){
       if(i%x === 0 && i%y ===0){
        magicNumber = i;
        break;
       } 
    }
    result[0] = magicNumber/x;
    result[1] = magicNumber/y;
    
    console.log(result);
    return result;
  }

  console.log(nbrOfLaps(5,3))