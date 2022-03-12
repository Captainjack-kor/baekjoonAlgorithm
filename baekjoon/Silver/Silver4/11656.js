const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input[0])

let temp = [input[0]];
let str = "";
for(let i = 0; i < input[0].length; i++) {
  for(let j = i + 1; j < input[0].length; j++) {
    str += input[0][j];
  }
  if(str !== '') {
    temp.push(str);
  }
  str = "";
}

temp.sort();
console.log(temp.join('\n'));