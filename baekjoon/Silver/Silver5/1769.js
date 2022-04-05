const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// console.log(input);
let num = String(input);
let answer = [];
let count = 0;

while(String(num).length !== 1) {
  let sum = 0;
  for(let i = 0; i < String(num).length; i++) {
    sum += Number(num[i]);
  }

  num = String(sum);
  // console.log(num);
  count++;
} 
// console.log(count);
answer.push(count);

if(Number(num) === 3 || Number(num) === 6 || Number(num) === 9) {
  answer.push("YES");
} else {
  answer.push("NO");
}

console.log(answer.join('\n'));