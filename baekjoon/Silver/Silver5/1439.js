// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');
// let str = input[0];
console.log(input);

let setNumber = 0, answer_cnt1 = 0, answer_cnt2 = 0;;

for(let i = 0; i < input.length; i++){
  if(setNumber !== parseInt(input[i])){
    if(i === 0){
      answer_cnt1++;
    }
    else{
      if(input[i] !== input[i - 1]){
        answer_cnt1++;
      }
    }
  }
}

setNumber = 1;
for(let i = 0; i < input.length; i++){
  if(setNumber !== parseInt(input[i])){
    if(i===0){
      answer_cnt2++;
    }
    else{
      if(input[i] !== input[i - 1]){
        answer_cnt2++;
      }
    }
  }
}

console.log(Math.min(answer_cnt1,answer_cnt2))

// let str = input[0];
// let zero_count = 0;
// let one_count = 0;

// for(let i = 0; i < str.length; i++) {
//   if(str[i] !== str[i + 1]) {
//     if(str[i + 1] === '1') {
//       zero_count++;
//     } else {
//       one_count++;
//     }
//   }
// }

// if(zero_count >= one_count) {
//   console.log(one_count);
// } else {
//   console.log(zero_count);
// }

// let zero_count = 0;
// let one_count = 0;
// for(let i = 0; i < str.length; i++) {
//   if(str[i] === "0") {
//     zero_count++;
//   } else {
//     one_count++;
//   }
// }

// console.log(zero_count, one_count);

// let stack = str.split('');

// if(zero_count >= one_count) {
//   // console.log("나아님;")
//   console.log(stack_on_the_rail("0", "1"));
// } else {
//   // console.log("내가실행")
//   console.log(stack_on_the_rail("1", "0"));
// }

// function stack_on_the_rail(num, num2) {
//   let set_count = 0;
//   while(stack.length) {
//     if(stack[stack.length - 1] === num) {
//       stack.pop();
//     } else {
//       stack.pop();
//       if(stack[stack.length - 1] === num) {
//         set_count++;
//       }
//     } 
//   }

//   return set_count;
// }

