function solution(n, words) {
  var answer = [];
  let pplObj = {};
  var twiceAnswer = [];
  let checkEnd = 0;
  // console.log(str.lastIndexOf());
  words.forEach((word, index) => {
      let nextWord = "";
      let lastChar = "";
      
      if(!Array.isArray(pplObj[index % n ])) {
          pplObj[index % n] = [];
      }
  
      // 중복체크 Object.values()로  묶어서 처리 ?
      // 새로들어온 값이라고 생각
      
      if(words[index + 1] !== undefined) {
         nextWord = words[index + 1];
         lastChar = nextWord[0];
          // console.log(lastChar);
      }
      
      if(Object.values(pplObj).join().split(',').indexOf(words[index]) === -1) {
          pplObj[index % n].push(words[index]);
          twiceAnswer = [0,0]
          // console.log(twiceAnswer);
      } else {
          // console.log(index % n + 1);
          if(checkEnd === 0) {
              twiceAnswer = [index % n + 1,  pplObj[index % n].length + 1];
              checkEnd++;
          }
      }
      
       
      // console.log("index: " + index);
      // console.log("wordslength: " + words.length);
      
      if(index >= 1 && index + 1 !== words.length) {
          if(lastChar !== word[word.length - 1]) {
              if(answer.length === 0) {
                  if(index % n === 0) {
                      answer = [n, pplObj[n - 1].length + 1];
                  } else {
                      answer = [index % n, pplObj[index % n].length + 1];
                  }
              }
              // console.log(answer);
          }
      }
      
  })

  // console.log(pplObj);
  // if(answer.length === 0) {
  //     return [0,0];
  // }
  // console.log(check);
  // console.log(answer.length);
  // console.log(twiceAnswer);
  // console.log(words.length);
  // return twiceAnswer;
  // return result;
  if(answer.length === 0) {
      return twiceAnswer;
  } else {
      return answer;
  }
}

solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
