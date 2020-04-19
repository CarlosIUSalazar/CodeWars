const balancedParens = (string) => {

  
    let stringArray = string.split("");
      
      if (stringArray.length % 2 !== 0){
        return false;
      }
      
    console.log(stringArray);
      
    let sets = {
      "(" : ')',
      "[" : ']',
      "{" : '}'
    }
    
    //console.log("sets",sets)
    //console.log(Object.keys(sets))
    
    //console.log(sets["("])
    debugger;
    for(let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === ')' ||
          stringArray[i] === ']' ||
          stringArray[i] === '}' ) {
          if(i === 0){
            return false
          } else {
            if ( (stringArray[i] === ')' && stringArray[i - 1] === '(') ||
                (stringArray[i] === '[' && stringArray[i - 1] === ']') ||
                (stringArray[i] === '{' && stringArray[i - 1] === '}') ) {
                  let temp1 = i;
                  let temp2 = i-1;
                  let smallerArray = [];
                  for(let j = 0; j < stringArray.length; j++){
                    if(j !== temp1 && j !== temp2){
                      //console.log(j!==temp1)
                      console.log("stringArray",stringArray)
                      console.log(temp1,temp2)
                      smallerArray.push[stringArray[j]]
                    }
                  }
                  temp1 = 0; 
                  temp2 = 0;
                  stringArray = smallerArray;
                  smallerArray = [];
                console.log("stringArraySmaller", stringArray)
            } else {
              
            }
            
            
        }
      
      
    }
      
    }
      
    }
    balancedParens('[](){}'); // true
    balancedParens('[({})]');   // true
    balancedParens('[(]{)}'); // false