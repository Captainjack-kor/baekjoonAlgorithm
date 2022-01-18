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

  
  while(true) {
    let count = 0;
    let stack = [];
    let start = 1;

    // 일단 다빠지면 정지하는거 넣기 s.length !== 0

    let temp = "";
    for(let i = 0; i < s.length; i++) {
      //* "ababcdcdababcdcd"
      for(let j = i; j < start; j++) {
        temp += s[j];
      }
    }
    console.log("temp: " + temp);

    

    console.log(stack);
    break;
  }

  console.log("이걸 빠져나오네;");

  return answer;
}


solution("ababcdcdababcdcd");