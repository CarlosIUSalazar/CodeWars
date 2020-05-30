const insertionSort = (array) => {
    // [SOLUTION HERE]
    let next = array[1]; console.log("next",next)
    let prev = array[0]; console.log("prev",prev)
    let temp;
    if(next < prev){
      let temp = prev;
      array[0] = next;
      array[1] = temp;
    }
    console.log("after",array)
    debugger;
    for (let j=0; j<array.length; j++){
    for(let i = 1; i < array.length; i++){
        next = array[i+1];
        prev = array[i];
        if(next < prev){
          temp = prev;
          array[i] = next;
          array[i+1] = temp;
        }
    }
}
     console.log("after",array)
  }; 
  console.log(insertionSort([7,4,2,5,15]))