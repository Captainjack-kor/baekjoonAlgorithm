const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
    
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++; 
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
        return;
      }
      count++;
      current = current.next;
    }
    // return;
    return null;
  }

  getHead() {
    return this.head.data;
  }

  getSize() {
      return this.size;
  }
}

const linkedList = new LinkedList();

for(let i = 1; i <= Number(input); i++) {
  linkedList.insertLast(i);
}

// console.log(linkedList);


while(linkedList.getSize() !== 1) {
  linkedList.removeAt(0);
  // let temp = linkedList.removeAt(0);
  // console.log(temp);
  linkedList.insertLast(linkedList.getHead());
  linkedList.removeAt(0);
}

console.log(linkedList.getHead());

/* 시간초과
let temp = [];
for(let i = 1; i <= Number(input); i++) {
  temp.push(i);
}

console.log(temp);

while(temp.length > 1) {
  temp.shift();
  temp.push(temp.shift());
} 

console.log(temp[0]);
*/
