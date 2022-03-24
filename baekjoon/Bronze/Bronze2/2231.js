const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let input_value = +input[0];
// console.log(input_value);
// 123 -> 999 각자리에 9가오는것이 최대
let min = input_value - (input[0].length * 9);
let max = input_value + (input[0].length * 9);
let check = false;
let sum = 0;
for(let i = min; i < max; i++) {
  let temp = String(i);
  for(let j = 0; j < temp.length; j++) { 
    sum += Number(temp[j]);
  }

  sum += i;
  if(sum === input_value) {
    check = true;
    console.log(i);
    break;
  } else {
    sum = 0;
  }
}

if(!check) {
  console.log(0);
}
