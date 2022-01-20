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
  let real_final_result = 0;

  for(let i = 1; i <= s.length; i++) {
    // 일단 다빠지면 정지하는거 넣기 s.length !== 0
    let count = 0;
    let temp = "";

    // let check_switch = false;
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
        console.log(temp);
        // check_switch = true;
        count++;
      } 
      // else {
      //   result.push(count);
      // }
      temp = "";
    }
    console.log("Stack: " + stack);
    console.log("Count: " + count)

    // if(count > 2) {
      result.push(count);
    // }


    for(let i = 0; i < stack.length; i++) {
      real_final_result += stack[i].length;
    }

    count = 0;
    stack = [];
    while(result.length > 0) {
      let temp = result.pop();
      if(temp !== 0) {
        real_final_result++;
      }
      if(String(temp + 1).length > 1) {
        real_final_result++;
      }
    }

    console.log("real_final_result: " + real_final_result);

    console.log(result);
    result = [];

    // if(min > real_final_result + i) {
    //   min = real_final_result + i;
    // }

    if(min > real_final_result) {
      min = real_final_result;
    }

    console.log(i);

    real_final_result = 0;

    // return min;
  }
  console.log("최종 결과 값: " + min);
  // return min;
}

// ! Test
// solution("baaabbc");  // 6
// solution("aabbacccca"); // 7

// solution("aabbacccca"); // 7

// solution("ababcdcdababcdcd"); // 9
// solution("ababcdcdababcdcd"); // 9

solution("aabbacccc"); // 7

// solution("abcabcabcabcdededededede"); // 14
//2a2ba4c => 7; 
// solution("abac"); // 7
// solution("2a2ba3c"); // 7