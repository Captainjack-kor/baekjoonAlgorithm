const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
let arr = [];
let isUsed = [];
let answer = [];
let temp = "";
function dps(k) {
  if(k === M) {
    for(let i = 0; i < M; i++) {
      temp += arr[i] + ' ';
    }
    answer.push(temp.trim());
    temp = "";
    
    return;
  }
  
  for(let i = 1; i <= N; i++) {
    if(!isUsed[i]) {
      arr[k] = i;
      // isUsed[i] = true;
      dps(k + 1);
      // isUsed[i] = false;
    }
  }
}
dps(0);
console.log(answer.join('\n'));