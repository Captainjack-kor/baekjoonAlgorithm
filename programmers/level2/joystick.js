// joystick

/*
맨 처음엔 A로만 이루어져 있습니다.
*  ▲ - 다음 알파벳
*  ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
*  ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
*  ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.

따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.

*/

//! 최종 나의 결론은 순열로 돌리는데 문자열 'A'가 연속된 갯수 카운트해서
//! 그 이하 나오는 배열들은 다 자르면 빅오가 해결 될 것 같다.......
function permutation(k, arr) {
  // K가 총 A의 갯수
  const { length } = arr
  let isVisit = new Array(length).fill(false);
  let result = [];
  const aux = (visit, arr = []) => {
      if(arr.length === length) {
        
        return result.push(arr);
      }
      for(let i = 0; i < length; i++){
          if(!visit[i]){
              visit[i] = true;
              aux(visit, arr.concat(i))
              visit[i] = false;
          }
      }
  }
  aux(isVisit)
  console.log(result)
}

function get_A_num(arr) {
  let count_A = 0;
  let max = [];
  for(let i = 0; i < arr.length; i++) {
    // let A_length = 'A'.repeat(i);
    // console.log(A_length);
    // if(arr.indexOf(A_length) !== -1) {
    //   max = A_length.length; 
    // }
    // for(let j = 0; j < arr.length; j++) {
      
    // }
    if(arr[i] === 'A' && arr[i + 1] === 'A') {
      count_A++;
    }

    max.push(count_A);
    // } 
  }

  return max;
}

function solution(name) {
  let strArr = ["A","B","C","D","E","F","G", "H", 
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // console.log("Length: " + strArr.length);
  var count = 0;
  let init = Array(name.length).fill("A");
  // let init = "A".repeat(name.length);
  // console.log(init);
  let start = 0;
  let end_point = name.length - 1;
  let back_switch = false;
  let test = false;
  let testCount = 0;
  console.log(name);
  let a_count = get_A_num(name);
  console.log("a_count: " + a_count);
  permutation(a_count, name);

  while(answer !== name) { //! 최종
  // while(start < 2) { //* TEST

    if(init[start] !== name[start]) {
      let temp_Up = -1;
      let temp_Down = 0;
      let temp_str_Up = "";
      let temp_str_Down = "";

      // UP
      for(let i = 0; i < strArr.length; i++) {
        temp_Up++;
        // console.log(strArr[i]);
        if(strArr[i] === name[start]) {
          temp_str_Up = strArr[i];
          // console.log(init[start]);
          break;
        }
      }

      //DOWN 
      for(let i = strArr.length - 1; i > 0; i--) {
        temp_Down++;
        // console.log(strArr[i])
        if(strArr[i] === name[start]) {
          temp_str_Down = strArr[i];
          break;
        }
      }
      if(temp_Up > temp_Down) {
        count += temp_Down;
        init[start] = temp_str_Down;
      } else {
        count += temp_Up;
        init[start] = temp_str_Up;
      }
      // console.log("UP: " + temp_Up);
      // console.log("Down: " + temp_Down);
    }


    //! console.log(init);
    //! console.log(name);

    var A_count = 0;
    var prev_str_length = 0;
    if(name[start] === 'A' && !back_switch && start !== 0) {
      A_count++;
      for(let i = 1; i <= name.length; i++) {
        // console.log(name[start + i]);
        if(name[start + i] !== undefined && name[start + i] === 'A') { 
          A_count++;
          prev_str_length = name.slice(0, start).length;
        }
        // if(A_count === 0) {
        //   A_count = 0;
        // }
      }
      // console.log(prev_str_length);
    }
    // console.log(A_count);
    // 0부터 start까지 자른 길이보다 크다면?
    // console.log("prev_Value: " +  prev_str_length);
    if(back_switch) {
      testCount++;
      start--;
      count++;
    } 
    else {
      // console.log(prev_str_length);
      // console.log("prev_Value: " +  prev_str_length);
      if(A_count > prev_str_length) {
        back_switch = true;
        start = end_point; //* TEST
        count += prev_str_length; //* TEST
        // count--;
      } else {
        start++;
        count++;  
      }
    }

    var answer = "";
    for(let i of init) {
      answer += i;
    } 

    // console.log(answer);
    
  }
  // let min = Math.min(...super_real_final_answer);
  // min--;
  // console.log(super_real_final_answer);
  if(testCount > 1) {
    test = true;
  }
  // console.log(test);
  
  if(test === true) {
    // console.log("엥?")
    count--;
  }
  // console.log(min);
  // console.log(--count);
  console.log(--count);
  return --count;
}

solution("JAZ"); // 11
// solution("JEROEN"); // 56 
solution("AA");
solution("AAA");
// solution("JAN"); // 23
// solution("ABAAAAAAAAABB") // 7
// solution("ABAAAAAAAABBB") // 9
// solution("ABAAAAAAABBBB") // 11
// solution("ABAAB") // 5
// solution("ABAAAAAAABA"); // 6
// solution("AAB"); // 2
// solution("AABAAAAAAABBB"); //15 //! 12
// solution("ZZZ"); // 5
// solution("BBBBAAAAAB"); //13 //! 10
// solution("BBBBAAAABA"); //13 //! 12
// solution("AAAAAAAA"); // 0
// solution("ABBBBAAAAABAAA"); // 15
// solution("ABAABAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAABABA"); // 23