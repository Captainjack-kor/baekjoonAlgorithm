const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [A, B, N] = input.split(' ').map(v => +v);

// console.log(A / B);
// let temp = A / B;
let temp = 0;
while(N--) {
  A %= B;
  A *= 10;
  temp = A / B;
}


console.log(Math.floor(temp));

// console.log(A, B, N);