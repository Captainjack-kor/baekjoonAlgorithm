const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let round1 = input[1].split(' ').map(v => Math.abs(Number(v)));
let round2 = input[2].split(' ').map(v => Number(v));
// (첫 번째 라운드 동전 값의 합) - (두 번째 라운드 동전 값의 합)


// 부등호 -가 한개라면 포기해야함 

console.log(round1);
console.log(round2);

let total = round1.reduce((acc, cur) => acc + cur);

console.log(total * 2);