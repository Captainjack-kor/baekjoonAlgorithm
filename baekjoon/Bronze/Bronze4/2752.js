const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[0].split(' ').map(v => +v);

arr.sort((a, b) => a - b)

console.log(arr.join(' '));