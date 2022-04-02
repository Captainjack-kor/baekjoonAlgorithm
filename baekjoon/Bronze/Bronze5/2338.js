let [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
A = +A;
B = +B;
answer.push(A + B);
answer.push(A - B);
answer.push(A * B);

console.log(answer.join('\n'));

