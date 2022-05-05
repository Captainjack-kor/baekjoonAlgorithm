const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
let standard = [1, 1, 2, 2, 2, 8];
let answer = [];
for(let i = 0; i < input.length; i++) {
  answer.push(standard[i] - input[i]);
}
console.log(answer.join(" "));