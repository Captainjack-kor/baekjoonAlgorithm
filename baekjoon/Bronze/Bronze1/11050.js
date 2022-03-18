const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0].split(' ')[0];
let K = +input[0].split(' ')[1];

// console.log(N, K);
let target_N = 1;
let target_K = 1;
let target_NK = 1; 
for(let i = 1; i <= N; i++) {
  target_N *= i;
}

for(let i = 1; i <= K; i++) {
  target_K *= i;
}

for(let i = 1; i <= N - K; i++) {
  target_NK *= i;
}

// console.log(target_N, target_K, target_NK);
let answer = 1;

answer = target_N / (target_K * target_NK);

console.log(answer);
