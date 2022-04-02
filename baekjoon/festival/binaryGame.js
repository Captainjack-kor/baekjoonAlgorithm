const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target = +input;
let answer = "";
for(let i = 0; i <= target; i++) {
  let temp = i;
  answer += temp.toString(2);
}

console.log(answer);

