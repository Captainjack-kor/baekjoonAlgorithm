const [input, ...temp] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = temp.map(v => +v);
let stack = [];
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 0) {
    stack.pop();
  } else {
    stack.push(arr[i]);
  }
}

// let sum = stack.reduce((acc,cur) => acc + cur);
let sum = 0;
for(let i = 0; i < stack.length; i++) {
  sum += stack[i];
}
console.log(sum);