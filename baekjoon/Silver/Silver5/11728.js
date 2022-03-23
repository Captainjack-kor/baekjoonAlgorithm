const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr1 = input[1].split(' ').map(v => +v);
let arr2 = input[2].split(' ').map(v => +v);
arr1 = arr1.concat(arr2);

arr1.sort((a, b) => a - b)

console.log(arr1.join(' '));