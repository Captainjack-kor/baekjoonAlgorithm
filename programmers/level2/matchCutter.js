function solution(s) {
    var answer = -1;
    let checkArr = [];
    let sArr = s.split('');
    console.log(sArr);
    for(let i = 0; i < s.length; i++) {
      if(s[i] === s[i + 1]) {
        // test = s.slice(s.indexOf(s[i]), s.indexOf(s[i + 1]));
      }
      // if(checkArr.indexOf(s[i]) === -1) {
      //   checkArr.push(s[i]);
      // } else {
      //   i++;
      // }

    }
    // console.log(test);
}


console.log(solution("babaacd"));