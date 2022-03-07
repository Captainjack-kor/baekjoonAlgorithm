// https://leylaoriduck.tistory.com/523

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target_length = Number(input[0]);

let arr = [0, 1, 1];

for(let i = 3; i <= target_length; i++) {

    arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
}

console.log((BigInt(arr[target_length])).toString());