const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target = input[0];

target = target.split('');

if(!target.includes('0')) {
  console.log(-1);
} else {
  let sum = target.reduce((acc, cur) => acc + Number(cur), 0)
  if(sum % 3 !== 0) {
    return console.log(-1);
  } 
  let v = target.sort((a, b) => b - a).join('');

  console.log(v);
}