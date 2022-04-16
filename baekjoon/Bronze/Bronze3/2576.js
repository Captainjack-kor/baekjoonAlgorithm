const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let temp = input.map(v => +v);

function oddChecker(num) {
  if(num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

let sum = 0;
let max = Infinity;
let result = [];
let falseArr = [];
for(let i = 0; i < temp.length; i++) {
  if(oddChecker(temp[i])) {
    sum += temp[i];
    if(temp[i] < max) {
      max = temp[i];
    }
  } else {
    falseArr.push(0);
  }
}
if(falseArr.length === temp.length) {
  console.log(-1);
} else {
  result.push(sum);
  result.push(max);
  console.log(result.join('\n'));
}