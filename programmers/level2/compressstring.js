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
  // let start = 1;
  let max = 0;
  let stack = [];
  // let result = [];

  // for(let i = 0; i < s.length; i++) {
    // 일단 다빠지면 정지하는거 넣기 s.length !== 0
    let temp = "";
    //* "ababcdcdababcdcd"
    //* "aabbaccc" => 2a | 2b | a3c = 7
    for(let j = 0; j < s.length; j++) {
      // temp = s.substring(j, (j + i) * 2);
      temp = s.substring(j + 1, j); 
      // console.log(temp);
      if(stack[stack.length - 1] !== temp && temp !== undefined) {
        stack.push(temp);
      } else if(stack[stack.length - 1] === temp){
        count++;
      }
      temp = "";
    }

    // if(max < count) {
      // max = count;
    // } 
    console.log(count);
    if(stack.length + count > max)  {
      max = stack.length + count;
    }
    
    count = 0;
    stack = [];

    console.log(max);

    return max;
  // }
}


// solution("ababcdcdababcdcd");
solution("aabbacccc"); // 7
//2a2ba4c => 7; 
// solution("abac"); // 7
// solution("2a2ba3c"); // 7