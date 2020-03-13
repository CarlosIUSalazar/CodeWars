// CODE WARS  6 KYU Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
function list(names){

let listOfNames = []
names.forEach(name => listOfNames.push(name.name));


let string = '';

if (listOfNames.length === 1){
  return string += listOfNames[0];
}
if (listOfNames.length === 0){
  return '';
}

for (let i = 0; i < listOfNames.length; i++){

  if (i > 0 && i < listOfNames.length - 1){
  string+= ', ';
  }
  if (i === listOfNames.length -1) {
    string+= ' & ';
  }
  string += listOfNames[i];
}

console.log(string);
return string;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'}]))