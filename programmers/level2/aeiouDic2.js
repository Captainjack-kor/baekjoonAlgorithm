function solution(word) {
  var answer = 0;
  let vowels = ["A", "E", "I", "O", "U"];
  // 781
  // (n * 5) + 1
  // 6, 31, 156, 781, 

  let target_Value = [781, 156, 31, 6, 1];
  // let target_Value = [1, 6, 31, 156, 781];
  
  let start = 0;
  // if(word.length === 1) {
    // for(let i = 0; i < vowels.length; i++) {
    //   if(vowels[i] !== word[i]) {
    //     answer += target_Value[target_Value.length - 1];
    //   }
    // }
  // }
  
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(word[i] === vowels[j]) {
        answer += (target_Value[i] * j) + 1;
      }
    }
  }
  console.log(answer);

  // if(word[0] === "A") {
  //     answer += 1;
  // } else if (word[0] === "E") {
  //     answer +=  781;
  // } else if (word[0] === "I") {
  //     answer += 1563;
  // } else if (word[0] === "O") {
  //     answer += 2344;
  // } else if (word[0] === "U") {
  //     answer += 3125;
  // }
  
  return answer;
}

solution("AA");
solution("AAA");
solution("AAAE");
solution("EIO");
solution("E");
solution("I");
solution("O");