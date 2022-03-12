function solution(strings, n) {
  var answer = [];

  strings.sort((a,b) => {
      var compareA = a[n];
      console.log("compareA: " + compareA);
      var compareB = b[n];
      console.log("compareB: " + compareB);
      if(compareA === compareB) {
          return (a > b) - (a < b);
      } else {
          return (compareA > compareB) - (compareA < compareB);
      }
  })

  return strings;
}