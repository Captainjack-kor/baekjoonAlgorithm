const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
let sortedArr = arr[0].split(' ').map(v => +v).sort((a, b) => a - b);
let [N, M] = input.split(' ').map(v => +v);
let temp = "";
let answer = [];
let result = [];
let isUsed = [];
// console.log(N, M);
// console.log(sortedArr);

function dps(k) {
  if(k === M) {
    for(let i = 0; i < M; i++) {
      temp += sortedArr[result[i]] + " ";
    }
    answer.push(temp.trim());
    temp = "";
    return;
  } 

  let st = 0;
  if(k !== 0) {
    st = result[k - 1];
  }

  for(let i = st; i < N; i++) {
    // if(!isUsed[i]) {
      result[k] = i; // 인덱스를 지정
      // isUsed[i] = true;
      dps(k + 1)
      // isUsed[i] = false;
    // }
  }
}


dps(0);

console.log(answer.join('\n'));