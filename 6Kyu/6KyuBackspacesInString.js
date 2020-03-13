// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
//debugger;
function cleanString(s) {
    
    let resultString = []

    let stringArray = s.split('')

    for(let i = 0; i< stringArray.length; i++){
        if(stringArray[i] !== '#'){
            resultString.push(stringArray[i])
        } else {
            if (stringArray[i] === '#'){
                resultString.pop();
            }
        }
    }

    if (resultString.length === 0){
        resultString[0] = '';
    }
    return resultString.join('');

};

console.log("result is",cleanString('abc##d######'))