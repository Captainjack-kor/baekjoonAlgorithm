const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [L, P] = input.split(' ').map(v => +v);
let listArr = arr[0].split(' ').map(v => +v);
let scale = L * P;
let answer = [];

for(let i = 0; i <listArr.length; i++) {
  answer.push(listArr[i] - scale);
}

console.log(answer.join(' '));
