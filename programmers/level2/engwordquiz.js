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
    

    pplObj[index % n].push(words[index]);

    //   if(Object.values(pplObj).join().split(',').indexOf(words[index]) === -1) {
    //       pplObj[index % n].push(words[index]);
    //       twiceAnswer = [0,0]
    //       // console.log(twiceAnswer);
    //   } else {
    //       // console.log(index % n + 1);
    //       if(checkEnd === 0) {
    //           twiceAnswer = [index % n + 1,  pplObj[index % n].length + 1];
    //           checkEnd++;
    //       }
    //   }
    
    
    //   if(index >= 1 && index + 1 !== words.length) {
    //       if(lastChar !== word[word.length - 1]) {
    //           if(answer.length === 0) {
    //               if(index % n === 0) {
    //                   answer = [n, pplObj[n - 1].length + 1];
    //               } else {
    //                   answer = [index % n, pplObj[index % n].length + 1];
    //               }
    //           }
    //           // console.log(answer);
    //       }
    //   }
  })

  console.log(pplObj);

  let newArr = [words[0]];
  let head = "";
  let tail = "";
  // let tail = words[0][words[0].length - 1];
  // console.log(tail);

  for(let i = 1; i < words.length; i++) {
    // console.log(words[i]);
    if(newArr.indexOf(words[i]) !== -1) {
      console.log("구라치다 걸리면 뒤지는거여");
      answer = [i % n + 1, pplObj[i % n].indexOf(words[i]) + 1];
      console.log(answer);
      return answer;
    }
    newArr.push(words[i]);
    head = words[i][0];
    tail = words[i - 1][words[i - 1].length - 1];
    // console.log("tail: " + tail);
    // console.log("head: " + head);
    if(tail !== head) {
      console.log("당첨");
      answer = [i % n + 1, pplObj[i % n].indexOf(words[i]) + 1];
      console.log(answer);
      return answer;
    }

  }
  // return [0, 0];
  console.log([0, 0]);

}

solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
// solution(2,["hello", "one", "even", "never", "now", "world", "draw"]);
// solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]);
