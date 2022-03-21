const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const [input2, ...arr2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);]
let temp = arr[0].split(' ').map(v => +v);
let target_arr = arr[2].split(' ').map(v => +v);
let input2 = arr[1];

let answer = [];
// for(let i = 0; i < temp.length; i++) {
//   if(temp.indexOf(temp2[i]) !== -1) {
//     answer.push(1);
//   } else {
//     answer.push(0);
//   }
// }

let temp_arr = new Set(temp);

for(let i = 0; i < target_arr.length; i++) {
  if(temp_arr.has(target_arr[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join('\n'));


/*
https://gurtn.tistory.com/94, https://gurtn.tistory.com/93 [이진탐색]
or

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, A, M, B] = input.map(v => v.split(" "));

const array = new Set(A);

const result = B.map(v => array.has(v) ? 1 : 0);

console.log(result.join("\n"));

*/
