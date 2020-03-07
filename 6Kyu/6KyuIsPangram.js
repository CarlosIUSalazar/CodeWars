function isPangram(string){
    
    let testObj = {}
    let stringToArray = string.toLowerCase().split("")
    //console.log(stringToArray)
    for(let i = 0; i < stringToArray.length; i++){
        if (!testObj[stringToArray[i]]){
            testObj[stringToArray[i]] = 1;
        } else {
            testObj[stringToArray[i]]++;
        }
    }
    //console.log(testObj);
    for(let key in testObj){
        if(testObj["a"] >= 1 && testObj["b"]>= 1 && testObj["c"]>= 1 && testObj["d"]>= 1 && testObj["e"]>= 1 && testObj["f"]>= 1 && testObj["g"]>= 1 && testObj["h"]>= 1 && testObj["i"]>= 1 && testObj["j"]>= 1 && testObj["k"]>= 1 && testObj["l"]>= 1 && testObj["m"]>= 1 && testObj["n"]>= 1 && testObj["o"]>= 1 && testObj["p"]>= 1 && testObj["q"]>= 1 && testObj["r"]>= 1 && testObj["s"]>= 1 && testObj["t"]>= 1 && testObj["u"]>= 1 && testObj["v"]>= 1 && testObj["w"]>= 1 && testObj["x"]>= 1 && testObj["y"]>= 1 && testObj["z"]>= 1){
            return true;
        } else return false;
    }
  }


  /////// ADVANCED SOLUTIONS
  function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  /////

  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }

  //////

  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  /////

  function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}

////

function isPangram(str){
    var alphabet = ['a', 'b', 'c', 'd', 'e',
           'f', 'g', 'h', 'i', 'j',
           'l', 'm', 'n', 'o', 'p',
           'q', 'r', 's', 't', 'u',
           'v', 'w', 'x', 'y', 'z'
         ];
         str=str.toLowerCase();
         for (var i = 0; i < alphabet.length; i++) {
             if (str.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
   }

   //// LOL
   function isPangram(string){
    var rng =  Math.floor((Math.random() * 10) + 1);
     
     if(rng >= 5){
       return true;
     }
     if(rng < 5){
       return false;
     }
     
   }

