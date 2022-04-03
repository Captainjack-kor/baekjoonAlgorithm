const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = +input;

console.log(num % 20000303);