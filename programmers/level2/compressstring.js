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
  let min = s.length;
  let stack = [];
  let result = [];

  for(let i = 1; i <= s.length; i++) {
    // 일단 다빠지면 정지하는거 넣기 s.length !== 0

    let count = 0;
    let temp = "";
    //* "ababcdcdababcdcd"
    //* "aabbacccc" => 2a | 2b | a | 4c = 7
    // for(let j = 0; j < Math.floor(s.length / i); j++) {
    for(let j = 0; j < s.length; j++) {
      // temp = s.substring(j, (j + i) * 2);
      // i가 하나 커질떄마다 s.substring(i, 0)
      temp = s.substring((j + 1) * i, j * i); 
      
      // console.log(temp);
      if(stack[stack.length - 1] !== temp && temp !== undefined && temp !== '') {
        stack.push(temp);
        result.push(count);
        count = 0;
      } else if(stack[stack.length - 1] === temp){
      // } else {
        // console.log(stack[stack.length - 1]); //5 => a, b, c, c, c
        // count -= temp.length;
        console.log(temp);
        count++;
        console.log(count);
      } 
      temp = "";
    }
    console.log("Stack: " + stack);
    console.log("Count: " + count)

    count = 0;
    stack = [];

    console.log(result);

    // return min;
  }
}


// solution("ababcdcdababcdcd"); // 9
// solution("ababcdcdababc         dcd"); // 9
solution("aabbacccc"); // 7
// solution("abcabcabcabcdededededede"); // 14
//2a2ba4c => 7; 
// solution("abac"); // 7
// solution("2a2ba3c"); // 7