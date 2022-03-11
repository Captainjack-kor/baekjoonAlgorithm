const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let temp = input[0].split(' ');

let sumA = temp[0] + temp[1];
let sumB = temp[2] + temp[3];

console.log(Number(sumA) + Number(sumB));