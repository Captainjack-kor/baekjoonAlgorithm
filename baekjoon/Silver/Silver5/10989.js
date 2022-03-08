let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();
input = input.slice(1);
input = input.map(v => +v);

// console.log(input)

input.sort((a, b) => a - b);
let result = arr.join('\n');
console.log(result);