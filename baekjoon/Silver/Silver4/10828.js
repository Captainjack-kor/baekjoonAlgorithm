let [input, ...command] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();

// console.log(command);

let stack = [];

let result = [];
command.forEach(el => {
  if(el.split(' ')[1]) {
    stack.push(Number(el.split(' ')[1]));
  } else if(el === 'top') {
    if(stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
  } else if(el === 'size') {
    result.push(stack.length);
  } else if(el === 'empty') {
    if(stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if(el === 'pop') {
    if(stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack.pop());
    }
  }
})

let answer = result.join('\n');
console.log(answer);