const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let money = input[0].split(' ').map(v => +v);
let count = 0;

count = money[0] / money[1];
let answer = [];
answer.push(count);
answer.push(money[0] % count);

console.log(answer.join('\n'));