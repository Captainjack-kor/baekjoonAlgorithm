const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[0].split(' ').map(v => +v);

// console.log(arr);
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 2);
}

console.log(sum % 10);
