const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let people = +input;

let P = arr[0].split(' ').map(v => +v);

P.sort((a, b) => a - b);

let sum = 0;
let result = 0;
for(let i = 0; i < P.length; i++) {
  sum += P[i];
  // console.log(sum);
  result += sum;
}

console.log(result);
