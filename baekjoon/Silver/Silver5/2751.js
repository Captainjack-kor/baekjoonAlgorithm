let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();
input = input.slice(1);
let arr = input.map(v => +v);
// console.log(arr);
arr.sort((a, b) => { return a - b });


let result = arr.join('\n');

console.log(result);

