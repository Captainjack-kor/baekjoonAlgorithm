const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let bag = input[0].split(' ')[1];

let list = arr.map(v => v.split(' ').map(v => +v));

console.log(bag);
console.log(...list);