const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target = +input;
let count = 0;
let sum = 0; 
for(let i = 1; i < target; i++) {
  sum += i;
  if(sum > target) {
    break;
  }
  count++;
}

console.log(count);