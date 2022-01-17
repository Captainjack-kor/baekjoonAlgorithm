function solution(s) {
  var answer = 0;

  //"2a2ba3c" => length: 7
  //"ababcdcdababcdcd" => length: 
  //1개 "ababcdcdababcdcd" => length: 김
  //2개 "2ab2cd2ab2cd" => length: 김
  //3개 "aba bcd cda bab cdc d" => length: 김
  //4개 "abab cdcd abab cdcd" => length: 김
  //8개 "2ababcdcd" => length: 9

  // 무조건 스택아님?

  let count = 0;
  let stack = [];

  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      stack.push(s[0]);
    }
  }

  return answer;
}