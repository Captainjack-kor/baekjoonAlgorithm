let [input, arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target = Number(input.split(' ')[1]);

// console.log("input: " + input);
// console.log("arr: " + arr.split(' '));
arr = arr.split(' ');
// console.log(typeof(arr));
arr = arr.map(v => +v);
// console.log(arr);

arr.sort((a, b) => a - b);


console.log(arr[target - 1]);