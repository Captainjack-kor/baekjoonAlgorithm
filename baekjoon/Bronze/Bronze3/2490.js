const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let temp = input.map(v => v.split(' ').map(v => +v));
let answer = [];
let count = 0;
for(let i = 0; i < temp.length; i++) {
  for(let j = 0; j < temp[i].length; j++) {
    if(temp[i][j] === 1) {
      count++;
    }
  }
  if(count === 0) {
    answer.push("D");
  } else if(count === 1) {
    answer.push("C");
  } else if(count === 2) {
    answer.push("B");
  } else if(count === 3){
    answer.push("A");
  } else if(count === 4){
    answer.push("E");
  }
  count = 0;
}
console.log(answer.join("\n"));