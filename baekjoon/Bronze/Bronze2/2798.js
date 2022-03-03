const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);
let example = input[0].split(' ').map(v => Number(v));
let card_arr = input[1].split(' ').map(v => Number(v));
// console.log(example);
// console.log(card_arr);

let max = example[1];
let temp = 0;
let sum = 0;

// card_arr 에 있는 요소 3개를 계속 더해야한다

for(let i = 0; i < card_arr.length; i++) {
  for(let j = i + 1; j < card_arr.length; j++) {
    for(let z = j + 1; z < card_arr.length; z++) {
      sum = card_arr[i] + card_arr[j] + card_arr[z];
      if(sum <= max) {
        if(temp < sum) {
          temp = sum;
        }
      }
    }
  }
}

console.log(temp);
// console.log(Math.max(...result))
// console.log(result);