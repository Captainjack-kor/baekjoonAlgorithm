function solution(s, n) {
  var answer = '';
  let small =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
              "t","u","v","w","x","y","z"];
  let large =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
              "T","U","V","W","X","Y","Z"];

  let reverseSmall = [...small].reverse();
  // console.log(reverseSmall);
  let reverseLarge = [...large].reverse();
  // console.log(reverseLarge);
  
  // let pattern = /[a-z]*/;
  // pattern.test(s);
  // console.log(pattern)

  for(let i = 0; i < s.length; i++) {
    if(s[i] !== undefined && small.indexOf(s[i]) !== -1) {
      // 소문자
      if(small[small.indexOf(s[i]) + n] !== undefined) {
        answer += small[small.indexOf(s[i]) + n];
      } else {
      }
    } else {
      // 대문자
      if(large[large.indexOf(s[i]) + n] !== undefined) {
        answer += large[large.indexOf(s[i]) + n];
      } else {
      }
    }
  }
  console.log(answer);
  return answer;
}

solution("AB", 1); // "BC"
// solution("ab", 1); // "bc"

// solution("CD", 23);

// solution("z", 1); // "a"
// solution("a B z", 4); // "e F d";