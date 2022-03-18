const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let answer = [];
// let room = 101;

for(let i = 0; i < input.length; i++) {
  let temp = input[i].split(' ')
  // console.log(temp);
  //temp[2] 만큼 반복
  let N = temp[2];
  let W = Math.ceil(temp[2] / temp[0]);
  let H = temp[2] % temp[0];

  if(N % H === 0) {
    W = N / H;
  }

  if(W < 10) {
    W = W + String(0) + W;
  } 

  answer.push(`${H}${W}`);
}

console.log(answer.join('\n'));

