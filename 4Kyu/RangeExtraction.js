function solution(list){
    let hyphen = false;
    return list.reduce(
    function(range, num, i, list) {
      if(list[i-1] !== (num-1) || list[i+1] !== (num+1)) {
        range += hyphen ? "-" + num : "," + num;
        hyphen = false;
      } else{
        hyphen = true;
      }
      return range;
    });
  }
  //// Other //
  function solution(list) {
    list = list.map((v, i) => list[i - 1] == v - 1 && list[i + 1] == v + 1 ? '-' : v);
    return list.filter((v, i) => v != '-' || list[i - 1] != '-').join(',').replace(/,-,/g, '-');
}
