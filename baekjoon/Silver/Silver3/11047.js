const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input.split(' ').map(v => +v);
let coinArr = arr.map(v => +v);
coinArr.sort((a, b) => b - a);
// console.log(coinArr);

let current = 0;
let sum = 0;
let count = 0;

for(let coin of coinArr) {
  count += Math.floor(K / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
  // 0 = 0 + 1260;
  K %= coin;
  // n = n % coin; 1260 / 500 
  // count++;
  // console.log("coin: " + K);
}

// while(true) {
//   // console.log(coinArr[current]);
//   if(sum + coinArr[current] < K) {
//     sum += coinArr[current];
//     count++;
//   } else if(sum + coinArr[current] === K) {
//     sum += coinArr[current];
//     count++;
//     break;
//   } else { 
//     current++;
//   }
// }

console.log(count);
