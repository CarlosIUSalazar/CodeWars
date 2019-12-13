//code wars  return divisors list of a number except 1 and iself, if prime return such and such is prime.
function divisors(integer) {
  
  let x = [];
  
  for (let i = 2; i < integer ; i++){
    if (integer % i === 0){
      x.push(i);
    }
  }
  
  if (x.length === 0) {
    return `${integer} is prime`;
  } else {
    return x;
  }
  
};