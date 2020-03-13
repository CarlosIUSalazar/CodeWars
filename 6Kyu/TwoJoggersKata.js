//debugger;
var nbrOfLaps = function (x, y) {
    
    let result = [];
    let magicNumber = 1;
    
    for (i=2;i<100000000;i++){
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

  /////

  //Advanced solutions:
  function gcd(a, b) {
    if(b == 0)
      return a;
    return gcd(b, a % b);
  }
  
  var nbrOfLaps = function (x, y) {
    var lcm = (x*y)/ gcd(x,y);
    return [lcm/x, lcm/y];
  }

  ///

  var nbrOfLaps = function (x, y) {
    for(i=1;x*i%y > 0;i++){}
    return([i,x*i/y]);
  }