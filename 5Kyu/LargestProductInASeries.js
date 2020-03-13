// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

// Adapted from Project Euler.
//debugger;
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

    console.log(resultCandidates)

    let resultArray = resultCandidates.filter(element => !Number.isNaN(element)) //Removes NaN values
    console.log("resultArray",resultArray);

    let result = Math.max.apply(null, resultArray);

    console.log("result",result)

    return result;

  }

  console.log(greatestProduct("123834539327238239583"))