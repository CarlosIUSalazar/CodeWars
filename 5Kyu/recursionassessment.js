const findDups = function(string) {
    const memo = {};
    const dups = [];
    let letterArray = string.split('');


    for (let i = 0; i < letterArray.length; i++) {
      for (key in memo) {
        if (memo[key] === letterArray[i]) {
            memo[i] = letterArray[i];
        } else {
          dups.push(letterArray[i]);
        }
      }
    }
    return dups;
  };

  console.log(findDups("Mississipi"));