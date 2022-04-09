const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [A, B, C] = input.split(' ').map(v => +v);
let result = 1;
let temp = 1;

function modTest(A, B, C) {
  while(B > 0) {
    temp = BigInt(parseInt(temp * A));
    B--;
  }
  console.log(temp);
  return temp % C;
}

console.log(modTest(A, B, C));

// console.log(result);


