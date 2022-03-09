const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);

let queue = [];
let temp = [];
arr.forEach((el) => {
  if(el.split(' ')[0] === 'push') {
    queue.push(el.split(' ')[1]);
  } else if(el === 'front') {
    if(queue.length) { 
      temp.push(queue[0]);
    } else {
      temp.push(-1);
    }
  } else if(el === 'back') {
    if(queue.length) {
      temp.push(queue[queue.length - 1]);
    } else{
      temp.push(-1);
    }
  } else if(el === 'size') {
    temp.push(queue.length);
  } else if(el === 'empty') {
    if(queue.length) {
      temp.push(0);
    } else {
      temp.push(1);
    }
  } else if(el === 'pop') {
    if(queue.length) {
      temp.push(queue.shift());
    } else {
      temp.push(-1);
    }
  }
});

let answer = temp.join('\n');
console.log(answer);
