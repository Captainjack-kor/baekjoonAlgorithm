const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let list = arr[0].split(' ').map(v => +v);
let count = 0;
let i = 1;
let sortedList = list.slice().sort((a, b) => a - b);
let answer = Array(+input).fill(false);
// Array.from({ length: +input }, () => 0);

list.forEach((data, i) => {
  answer[i] = sortedList.findIndex((el, idx) => {
    if (el === data && !(answer.includes(idx))) {
      return true;
    }
  })
});

console.log(answer.join(' '));