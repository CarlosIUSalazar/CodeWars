// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

// Adapted from Project Euler.
//debugger;
// function greatestProduct(input) {
//     // todo
//     let inputToArray = input.split('')

//     let resultCandidates = []
//     let counterBegin = 0;
//     let counterEnd = counterBegin + 5
//     let tempTotal = 1;

//     for(let i = 0 ; i < inputToArray.length; i++) {
//         for (let j = counterBegin; j < counterEnd; j++){
//             tempTotal *= inputToArray[j]
//         }
//         counterBegin++;
//         counterEnd++;
//         resultCandidates.push(tempTotal)
//         tempTotal = 1;
//     }

//     console.log(resultCandidates)

//     let resultArray = resultCandidates.filter(element => !Number.isNaN(element)) //Removes NaN values
//     console.log("resultArray",resultArray);

//     let result = Math.max.apply(null, resultArray);

//     console.log("result",result)

//     return result;

//   }

//   console.log(greatestProduct("123834539327238239583"))


  /// Refactored to submit:

  function greatestProduct(input) {
    // todo
    let inputToArray = input.split('')
    let resultCandidates = []
    let counterBegin = 0;
    let counterEnd = counterBegin + 5
    let tempTotal = 1;

    for(let i = 0 ; i < inputToArray.length; i++) {
        for (let j = counterBegin; j < counterEnd; j++){
            tempTotal *= inputToArray[j]
        }
        counterBegin++;
        counterEnd++;
        resultCandidates.push(tempTotal)
        tempTotal = 1;
    }

    return Math.max.apply(null, resultCandidates.filter(element => !Number.isNaN(element)));
  }

  console.log(greatestProduct("123834539327238239583"))


  //////  OTHER SOLUTIONS ////

  function greatestProduct(input) {
    return input.split('').reduce(function(max, d, i, a) {
      if (i > input.length - 5)
        return max;
      var prod = a.slice(i,i+5).reduce(function(prd, d) {return prd*parseInt(d,10)},1);
      return Math.max(max, prod);
    }, 0);
  }


  //////

  function greatestProduct(input) {
    var max = 0;
    for ( var i = 4; i < input.length; i++ ) {
      max = Math.max( max, input[i-4]*input[i-3]*input[i-2]*input[i-1]*input[i] );
    }
    return max;
  }

  ////

  const greatestProduct=s=>Math.max(...[...s.slice(0,-4)].map((x,y)=>[...s.slice(y,y+5)].reduce((a,b)=>+a*+b)))
