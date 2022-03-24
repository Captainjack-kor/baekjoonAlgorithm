const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let list = input[0].split('').map(v => +v);
let count = 0;
let init = Array.from({ length: 9 }, () => 0);
console.log(init);

for(let i = 0; i < list.length; i++) {
  if(list[i] === 6 || list[i] === 9) {
    init[6]++;
  } else {
    init[list[i]]++;
  }
}
console.log(init);

init[6] = Math.ceil(init[6] / 2);

console.log(init);

let max = 0;
for(let i = 0; i < init.length; i++) {
  if(init[i] > max) {
    max = init[i];
  }
}

console.log(max);