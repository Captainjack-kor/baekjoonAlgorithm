const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let temp = input[0].split(' ').map(v => +v);

console.log((temp[1] * 2) - temp[0]);
