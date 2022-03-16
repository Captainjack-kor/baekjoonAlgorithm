const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let temp = input[0].split(' ').map(v => +v);
let answer = "";

let temp_sorted = temp.slice();
// console.log(temp_sorted);
let ascending = [1,2,3,4,5,6,7,8];
let descending = [8,7,6,5,4,3,2,1];


if(temp[0] === 1) {
  let count = 0;
  for(let i = 0; i < temp.length; i++) {
    if(temp[i] !== ascending[i]) {
      answer = "mixed";
      break;
    } else {
      count++;
    }
  }
  if(count >= 8) {
    answer = "ascending";
  }
} else if(temp[0] === 8) {
  let count = 0;
  for(let i = 0; i < temp.length; i++) {
    if(temp[i] !== descending[i]) {
      answer = "mixed";
      break;
    } else {
      count++;
    }
  }
  if(count >= 8) {
    answer = "descending";
  }
} else {
  answer = "mixed";
}

console.log(answer);