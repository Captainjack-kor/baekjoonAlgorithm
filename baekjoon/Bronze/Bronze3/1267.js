const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let call_history = arr[0].split(' ').map(v => +v);
let total_price_of_Y = 0;
let total_price_of_M = 0;
let answer = [];
for(let i = 0; i < Number(input); i++) {
  total_price_of_Y += get_Y_mobile(call_history[i]);
  total_price_of_M += get_M_mobile(call_history[i]);

  
}


if(total_price_of_Y > total_price_of_M) {
  answer.push("M");
  answer.push(total_price_of_M);
} else if(total_price_of_Y < total_price_of_M) {
  answer.push("Y");
  answer.push(total_price_of_Y);
} else {
  answer.push("Y");
  answer.push("M");
  answer.push(total_price_of_M);
}

console.log(answer.join(' '));

function get_Y_mobile(num) {
  let sum = 0;
  sum += ((num / 30) + 1) * 10;
  return sum;
}


function get_M_mobile(num) {
  let sum = 0;
  sum += ((num / 60) + 1) * 15;
  return sum;
}
