//24 Dec 2019.  5Kyu  Rot 13
// a(97)   b c d e f(102) g h i j k(107) l m(+13=z) n(110) o p(112) q r s t u(117) v w x y z(122)
// A(65)   b c d e f(70) g h i j k(75) l m(+13=z) n(78) o p(80) q r s t u(85) v w x y Z(90)
//String.fromCharCode(72) gives H
//'H'.charCodeAt(0)
//debugger;

function rot13(message){
    let temp =''
    let newString = '';
    for(let i = 0; i < message.length; i++){
      temp = (message[i]).toString().charCodeAt();
      //console.log(temp);
      if (temp <65 || temp >122) {
        //if (temp > 90 && temp < 97){
          newString += String.fromCharCode(temp);
        //}
      } else if (temp <= 90){
          temp = temp + 13;
        if (temp > 90){
          temp = temp - 26
          newString += String.fromCharCode(temp);
        } else if (temp <= 90){
          newString += String.fromCharCode(temp);
        }
      } else if (temp >= 97){
          temp = temp + 13
          if (temp > 122){
            temp = temp - 26
            newString += String.fromCharCode(temp);
          } else if (temp <= 122){
            newString += String.fromCharCode(temp);
          }
      }
    
    }
    return newString;
    
    }
    
    console.log((rot13('Test')))//Grfg
    //console.log((4).toString().charCodeAt(0))
    
    // var codeA = 'A'.charCodeAt(0),
    //     codeZ = 'Z'.charCodeAt(0),
    //     codea = 'a'.charCodeAt(0),
    //     codez = 'z'.charCodeAt(0);
    // function rot13(message){
    //   return message.split('').map(function(char) { 
    //     var code = char.charCodeAt(0);
    //     if(codeA <= code && code <= codeZ){
    //       return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    //     } else if(codea <= code && code <= codez){
    //       return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    //     }
    //     return char;
    //   }).join('');
    // }