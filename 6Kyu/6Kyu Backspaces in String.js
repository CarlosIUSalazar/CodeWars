// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
    
    let resultString = []

    let stringArray = s.split('')

    for(let i = 0; i< stringArray.length; i++){
        if(stringArray[i] !== '#'){
            resultString.push(stringArray[i])
        } else {
            if (stringArray[i] === '#' && i > 0){
                resultString.pop()
            }
        }
    }


    console.log(resultString.join(''))

};

console.log(cleanString('abc#d##c'))