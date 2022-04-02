let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let temp = input.map(v => +v).reduce((acc, cur) =>  acc + cur,0);
console.log(temp);
