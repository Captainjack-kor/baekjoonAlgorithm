const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let inputLength = +input[0];

// let A = input[1].split(' ').map(v => +v);
// let B = input[2].split(' ').map(v => +v);
let A = input[1].split(' ').map(v => +v).sort((a, b) => a - b);
let B = input[2].split(' ').map(v => +v).sort((a, b) => b - a);
let sum = 0;

for(let i = 0; i < inputLength; i++) {
  sum += A[i] * B[i];
}

console.log(sum);