//피보나치함수 0,1 카운트
const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let result = [];
let inputValue = arr.map(v => +v);
let countZero = 0;
let countOne = 0;
// let memo = [0, 1];
// console.log(inputValue);

for(let i = 0; i < input; i++) {
  let memo = [[1, 0], [0, 1]];
  for(let j = 2; j <= inputValue[i]; j++) {
    memo[j] = [memo[j - 1][0] + memo[j - 2][0], memo[j - 1][1] + memo[j - 2][1]];
  }
  result.push(memo[j]);
}
// let fibo = (num) => {
//   // let memo = [0, 1];
//   if(num === 0) {
//     countZero++;
//   } else if(num === 1) {
//     countOne++;
//   }

//   if(memo[num] !== undefined) {
//     return memo[num];
//   }
  
//   return  memo[num] = fibo(num - 1) + fibo(num - 2);
// }

// for(let i = 0; i < input; i++) {
//   countZero = 0;
//   countOne = 0;
//   fibo(inputValue[i])
//   result.push([`${countZero} ${countOne}`]);
// }

console.log(result.join('\n'));