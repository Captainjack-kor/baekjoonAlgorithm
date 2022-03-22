const { deepEqual } = require("assert");

const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

/*
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/
let dequeue = [];
let answer = [];
for(let i = 0; i < arr.length; i++) {
  let temp = arr[i].split(' ');
  if(temp[0] === 'push_front') {
    dequeue.unshift(temp[1]);
  } else if(temp[0] === 'push_back') {
    dequeue.push(temp[1]);
  } else if(temp[0] === 'pop_front') {
    if(dequeue.length > 0) {
      answer.push(dequeue.shift());
    } else {
      answer.push(-1);
    }
  } else if(temp[0] === 'pop_back') {
    if(dequeue.length > 0) {
      answer.push(dequeue.pop());
    } else {
      answer.push(-1);
    }
  } else if(temp[0] === 'size') {
    answer.push(dequeue.length);
  } else if(temp[0] === 'empty') {
    if(dequeue.length > 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if(temp[0] === 'front') {
    if(dequeue.length > 0) {
      answer.push(dequeue[0]);
    } else {
      answer.push(-1);
    }
  } else if(temp[0] === 'back') {
    if(dequeue.length > 0) {
      answer.push(dequeue[dequeue.length - 1]);
    } else {
      answer.push(-1);
    }
  }
}

console.log(answer.join('\n'));