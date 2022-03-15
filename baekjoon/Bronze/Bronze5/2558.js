const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);
console.log(Number(input[0]) + Number(input[1]));