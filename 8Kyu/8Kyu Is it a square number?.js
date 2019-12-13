//Code WARS The number is a square number?  No es negativo, su raiz cuadrada es entera:
var isSquare = function(n){

  x = Math.sqrt(n);
  if (n < 0){
    return false;
    } else if (Number.isInteger(x)) {
      return true
    } else {
    return false;
    }
  
  }