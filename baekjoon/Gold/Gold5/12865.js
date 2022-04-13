const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let bag = input.split(' ').map(v => +v);

let list = arr.map(v => v.split(' ').map(v => +v)).sort((a, b) => b[0] - a[0]);

console.log(bag);
console.log(list);