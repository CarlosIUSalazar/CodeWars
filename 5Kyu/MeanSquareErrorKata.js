// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

var solution = function(firstArray, secondArray) {
    let resultArray = [];

    for(let i = 0; i<firstArray.length; i++){
        resultArray[i] = ((firstArray[i]-secondArray[i])**2)
    }

    console.log(resultArray)

    return resultArray.reduce((a,b) => a+b)/resultArray.length;
    
}

console.log(solution([1, 2, 3], [4, 5, 6]))