function solution(name) {
  let strArr = ["A","B","C","D","E","F","G", "H", 
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // console.log("Length: " + strArr.length);
  var count = 0;
  let init = Array(name.length).fill("A");
  // let init = "A".repeat(name.length);
  // console.log(init);
  // 무조건 업업업++ -> 뒤에서 부터 업업다운 업다운다운 다운다운다운....
  // 조이스틱 move를 최소화 해야 하는게 관건인데 

  // Z가 가장 크고 A가 가장 작다고 가정하면?

  //와 미친 그냥 하나하나 판단하면 되는거아님? 혹시 나 천재일지도 ㅁㅊ;;;;
  //하나하나가 그리디로 찾는거임 와 개소름 ㅁㅊ 님 그냥 구글입사 ㄱ;

  let start = 0;
  while(answer !== name) { //! 최종
  // while(start < 2) { //* TEST

    //일단 문자 다르면 비교
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

    start++;
    count++;

    var answer = "";
    for(let i of init) {
      answer += i;
    } 
    // console.log("answer: " + answer);
  }

  // console.log(answer);
  // console.log(count - 1);
  return count - 1;
}
