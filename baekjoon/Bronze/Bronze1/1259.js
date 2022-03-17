
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.pop();
// let arr = input.map(v => +v);
// // console.log(arr);

// let answer = [];

// input.forEach((el) => {
//   let reverse = el.split('').reverse().join('');
//   let checker = true;
//   for(let i = 0; i < reverse.length; i++) {
//     if(reverse[i] !== el[i]) {
//       answer.push("no");
//       checker = false;
//       break;
//     }
//   }
//   if(checker) {
//    answer.push("yes");
//   }
// })

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.pop();
// let arr = input.map(v => +v);
// // console.log(arr);

// let answer = [];

// input.forEach((el) => {
//   let reverse = el.split('').reverse().join('');
//   let checker = true;
//   for(let i = 0; i < reverse.length; i++) {
//     if(reverse[i] !== el[i]) {
//       answer.push("no");
//       checker = false;
//       break;
//     }
//   }
//   if(checker) {
//    answer.push("yes");
//   }
// })

// console.log(answer.join('\n'));

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
let arr = input.map(v => +v);
//console.log(arr);

let answer = [];

input.forEach((el) => {
  let reverse = el.split('').reverse().join('');
  if(reverse === el) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
  // console.log(reverse);
})


console.log(answer.join('\n'));

