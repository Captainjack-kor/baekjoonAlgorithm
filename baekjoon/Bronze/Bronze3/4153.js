const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);
let answer = [];
for(let i = 0 ; i < input.length; i++) {
  let temp = input[i].split(' ').map(v => +v);
  temp.sort((a, b) => b - a);
  if(temp[0] > 0 && temp[1] > 0  && temp[2] > 0) {
    // console.log(temp);
    if(Math.pow(temp[0], 2) === Math.pow(temp[1], 2) + Math.pow(temp[2], 2)) {
      answer.push("right");
    } else {
      answer.push("wrong");
    }
  }
}

console.log(answer.join('\n'));