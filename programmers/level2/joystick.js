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

  // let result = [];
  let str_Split = name.split('');

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
  
    return results; // 결과 담긴 results return
  }
  
  getPermutations(str_Split, str_Split.length);

  let new_arr = getPermutations(str_Split, str_Split.length);
  for(let i = 0; i < new_arr.length; i++) {
    if(new_arr[new_arr.length - 1][i] !== str_Split[i] || str_Split[i + 1]) {
      //indexOf 2차이가 안나면 다 뺴버림.
      new_arr.pop();
    }
  }
  console.log(new_arr);

  let super_real_final_answer = [];

  for(let i = 0; i < new_arr.length; i++) {
    answer = new_arr[i];
    while(answer !== name) { //! 최종
    // while(start < 2) { //* TEST

      //일단 문자 다르면 비교 
      // 그전에 레프트 라이트부터 위치 잡아야 함.
      // 조합짜야할듯 ? name = ["A","B", "A", "A"];  2의 n승 만큼 돌린다
      // console.log(numArr);

      
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
      let super_min = Math.min(...super_real_final_answer);
      if(super_min < count) {
        break;
      }
      start++; //* TEST
      count++; //* TEST

      var answer = "";
      for(let i of init) {
        answer += i;
      } 


      // console.log("answer: " + answer);
    }
    // --count;
    super_real_final_answer.push(count);
  }

  let min = Math.min(...super_real_final_answer);
  min--;
  // console.log(super_real_final_answer);
  // console.log(--count);
  console.log(min);
  return min;
}

solution("JAZ"); // 11
solution("JEROEN"); // 56 
solution("JAN"); // 23
// solution("ABAAAAAAAAABB") // 7
// solution("ABAAAABB") // 7