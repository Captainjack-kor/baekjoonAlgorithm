function solution(s, n) {
  var answer = '';
  let small =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
              "t","u","v","w","x","y","z"];
  let large =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
              "T","U","V","W","X","Y","Z"];


  // console.log("small.length: " + small.length); // 26

  let reverseSmall = [...small].reverse();
  // console.log(reverseSmall);
  let reverseLarge = [...large].reverse();
  // console.log(reverseLarge);
  
  // let pattern = /[a-z]*/;
  // pattern.test(s);
  // console.log(pattern)

  let temp_N = n;
  let count = 0;
  let target = '';
  for(let i = 0; i < s.length; i++) {
    let index = 0;
    if(s[i] !== " ") {
      if(small.indexOf(s[i]) !== -1) {
        //* 소문자
       
        index += small.indexOf(s[i]) + n;
        // console.log("index: " + index);
        if(index >= small.length) {
          index -= small.length;
        }
        
        // console.log("index: " + index);

        answer += small[index];
        
      } else {
        //* 대문자
        index += large.indexOf(s[i]) + n;
        if(index >= large.length) {
          index -= large.length;
        }

        // console.log("index: " + index);
        answer += large[index];
      }
    } else {
      answer += " ";
    }
  }
  console.log(answer);
  // answer = answer.trim();
  return answer;
}

// solution("AB", 1); // "BC"
// solution("z", 1); // "bc"
// solution("Z", 2); // "B"
// solution("z", 3); // "c"

// solution("CD", 23);
// solution("c", 2); // "e"

// solution("z", 1); // "a"
// solution("z", 3); // "c""
// solution("a b         c", 1); // "b c d";
// solution("a B    z", 4); // "e F d";
// solution("AaZz", 25); // ZzYy
// solution("DIHDSVIDSHVIODSH", 25);

// 9 , 11 , 12 ,13