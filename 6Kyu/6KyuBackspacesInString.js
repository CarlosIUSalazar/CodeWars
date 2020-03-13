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

/// Advances Solutions
function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }

  ////
  clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');

  ////
  function clean_string(s) {
    var result = '';
    s.split('').forEach(function(char) {
      if (char !== '#') {
        result += char;
      } else if (char === '#' && result.length) {
        result = result.substr(0, result.length - 1);
      }
    });
    return result;    
  }


  ////
  function clean_string(string) {
    while (string.indexOf('#') >= 0)
        string = string.replace(/(^|[^#])#/g, '');
    return string;
}

////
clean_string=s=>~s.indexOf`#`?clean_string(s.replace(/[^#]?#/,'')):s

///

function cleanString(s) {
    return s.includes("#") ? cleanString(s.replace(/[\s\S]?\#/, "")) : s;
};

///