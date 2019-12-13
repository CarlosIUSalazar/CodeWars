//CODE WARS  Return a new array with X2 each value or original
function maps(x){
  let y = [];
  for (let i = 0; i < x.length; i++){
    y[i] = (x[i])*2;
    //console.log(y)
  }
return y;
};
console.log(maps([1,2,3,4]))