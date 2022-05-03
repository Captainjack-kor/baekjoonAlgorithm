// 해당 블로그의 코드를 이용하여 제출 하였습니다. 
// https://leylaoriduck.tistory.com/512

var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();
var inputs5 = Number(inputs);
var inputs2 = Number(inputs);
var answer5 = 0;
var answer2 = 0;
while(inputs5 >= 5){
	answer5 += parseInt(inputs5 / 5);
	inputs5 /= 5;
}

while(inputs2 >=2){
    answer2 += parseInt(inputs2 / 2);
    inputs2 /= 2;
}
console.log(Math.min(answer5, answer2));



// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// // let temp = input.split('');
// // temp.sort((a, b) => a - b)
// let next = 1;
// //

// if(Number(input) === 0) {
//   return 0;
// }

// for(let i = 1; i <= Number(input); i++)  {
//   next = next * i; 
// }

// let temp = String(next).split('').reverse();
// let count = 0;
// while(temp.length > 0) {
//   let data = temp.shift();
//   if(data !== "0") {
//     break;
//   } else {
//     count++;
//   }
// }
// console.log(count);