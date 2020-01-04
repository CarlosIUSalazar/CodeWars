function array_diff(a, b) {
  let exists = false;
  let newArr = [];
  if (b.length === 0){  // if (b === []) is false because JS compares 2 objects and are never the same https://stackoverflow.com/questions/35749660/javascript-if-conditions-array-and-array-length-0
    return a;
  } 

  for (let i = 0; i<a.length; i++){
    exists = false;
    for (let j = 0; j<b.length; j++){  
    
      if (a[i] === b[j]){
        exists = true;
      } 
    }
      if (exists === false){
        newArr.push(a[i]);
        //exists = true;
      }
  
}
  return newArr;
}

console.log(array_diff([1,2,3,4,3,4],[3,2]))

// Avanced Solitions
// function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
// }

// ///////

// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }


//   /////



// function array_diff(a, b) {
//     return a.filter(x=>b.indexOf(x));
//   }

