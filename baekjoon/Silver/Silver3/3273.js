const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let inputL = +input[0];
let list = input[1].split(' ').map(v => +v).sort((a, b) => { return a - b });
let max = +input[2];
let count = 0;
let start = 0;
let end = list.length - 1; 
while(start !== end) {
  if(list[start] + list[end] === max) {
    count++;
    start++;
  } else if(list[start] + list[end] > max) {
     end--;
  } else {
    start++; 
  }
}
// for(let i = 0; i < inputL; i++) {
//   for(let j = i + 1; j < inputL; j++) {
//     if(list[i] + list[j] === max) {
//       count++;
//     }
//   }
// }

console.log(count);