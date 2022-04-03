const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [A, B, C] = input.split(' ').map(v => +v);
console.log(A + B + C);