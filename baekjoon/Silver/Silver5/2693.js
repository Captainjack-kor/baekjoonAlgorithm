const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
for(let i = 0; i < arr.length; i++) {
  let temp = arr[i].split(' ');
  temp.sort((a, b) => a - b);
  // 1,2,3,4,5; 
  answer.push(temp[temp.length - 3]);
}

console.log(answer.join('\n'));

