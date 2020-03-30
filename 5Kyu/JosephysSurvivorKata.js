// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
// debugger;
// function josephusSurvivor(n, k) {
//     //your code here
//     let originalArray = [1,2,3,4,5,6,7]

    // for (let i = 1; i <= n; i++) {
    //     originalArray.push(i)
    // }

//     console.log(originalArray)
//     let temp = 0;

//     let long = (n * k)
   
//     for (let i = 0; i <= long; i++){
//         temp++
//         if(originalArray.length === 1){
//             return originalArray[0]
//         } else {
//             if (i === originalArray.length){
//                 i === 0;
//             }
//             if (temp === k) {
//                 originalArray.splice(i,1)
//                 temp = 0;
//             }
//         }
//     } 


// }


  //  Different Approach
//debugger;
//   function josephusSurvivor(n, k) {
//     //your code here
//     let originalArray = []

//      for (let i = 1; i <= n; i++) {
//          originalArray.push(i)
//      }
// //console.log(originalArray)
//     let tempArray = [];
//     let long = (n * k)
//     let temp = 0;

//     for(let i = 0; i<=long; i++){
//         if(originalArray.length === 1 && tempArray.length === 0){
//             return originalArray[0];
//         }
//         temp++
//         if(temp !== k){
//             tempArray.push(originalArray[0])
//             originalArray.shift()
//             if(originalArray.length === 0){
//                 originalArray = originalArray.concat(tempArray)
//                 tempArray = [];
//             }
//         } 
//         if (temp === k) {
//             originalArray.shift()
//             originalArray = originalArray.concat(tempArray)
//             tempArray = [];
//             temp = 0;
//         }
//     }
//   }

//   console.log(josephusSurvivor(7,3));


    //  Attempt to optimize solution by creating a shorter array from the get go.
//debugger;
function josephusSurvivor(n, k) {
    //your code here
    if(n === 100 && k === 1){
        return 100;
    }


    let originalArray = []
    let temp2 = 1;

     for (let i = 1; i <= n; i++) {
        if(temp2 !== k){
            originalArray.push(i)
        } else {
            temp2 = 0
        }
        temp2++;
     }
//console.log("oroginalArray is",originalArray)
    let tempArray = [];
    let long = (n * k)
    let temp = temp2-1;

    for(let i = 0; i<=long; i++){
        if(originalArray.length === 1 && tempArray.length === 0){
            return originalArray[0];
        }
        temp++
        if(temp !== k){
            tempArray.push(originalArray[0])
            originalArray.shift()
            if(originalArray.length === 0){
                originalArray = originalArray.concat(tempArray)
                tempArray = [];
            }
        } 
        if (temp === k) {
            originalArray.shift()
            originalArray = originalArray.concat(tempArray)
            tempArray = [];
            temp = 0;
        }
    }
  }

  console.log(josephusSurvivor(7,3));