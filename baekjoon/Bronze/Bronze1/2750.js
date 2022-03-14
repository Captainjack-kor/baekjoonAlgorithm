let [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map(v => +v);
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));