const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let inputValue = +input[0];
let tree = input[1].split(' ').map(v => +v).sort((a, b) => a - b);
let target = +input[2];
let count = 0;
if(inputValue === 1) {
  return console.log(1);
}
for(let i = 1; i <= inputValue; i++) {
  if(tree[i] >= target) {
    break;
  } else {
    count++;
  }
}

console.log(Math.floor(count /  2));
