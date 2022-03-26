const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(v => +v);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item)
    if(this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop(){
    if(this.empty() === 1) return -1
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    if(this.size() === 0){
      return 1;
    }else{
      return 0;
    }
  }

  front(){
    if(this.empty()==1) return -1;
    return this.head.item; 
  }

  back() {
    if(this.empty()==1) return -1;
    return this.tail.item; 
  }
}

let answer = []; 
let q = new Queue();

for(let i = 1; i <= N; i++){
  q.push(i);
}

console.log(q);

let cnt = 1;

while(q.size() !== 0){
  let temp = q.pop();
  if(cnt < K) {
    q.push(temp);
    cnt++;
  } else {
    answer.push(temp);
    cnt = 1;
  }
}

console.log(`<${answer.join(', ')}>`)