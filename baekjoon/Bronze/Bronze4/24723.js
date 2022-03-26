let input = require("fs").readFileSync("/dev/stdin").toString().trim();
 
input = +input;

let answer = [0, 2, 4, 8, 16, 32];

console.log(answer[input]);