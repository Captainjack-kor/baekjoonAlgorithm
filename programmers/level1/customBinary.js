function solution(n) {
  var answer = 0;
  // console.log(Number(n).toString(3));
  // let target3 = Number(n).toString(3).split('');
  // console.log(target3);
  // target3 = target3.reverse();
  // console.log(target3);


  let target3 = n.toString(3);
  let reverseStr = "";
  for(let i = target3.length - 1; i >= 0; i--) {
    reverseStr += target3[i];
  }
  console.log(reverseStr);
  // answer = Number(reverseStr).toString(3);
  // answer = Number(answer).toString(10);

  answer = parseInt(reverseStr, 3);
  // if(reverseStr.length >= 17) {
  //   ++answer;
  // }
  console.log(answer);
  
  // const x = Number(reverseStr) + 1;
  // const y = Number(reverseStr) + 2;
  // if(x === y) {
  //   return ++answer;
  // } else {
  //   return answer;
  // }

  return answer;
}

solution(45); // 7

solution(125); // 229

solution(78413450); // 110105530