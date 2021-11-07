class Stack {
  //stack constructor를 생성합니다.
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  // stack의 사이즈를 구합니다.
  // this.top은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로 size를 구할 수 있습니다.
  // this.top은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 0부터 1씩 증감하며 표현하기 때문에 전체 요소의 개수를 나타낼 수 있습니다
  size() {
    return this.top;
  }
  //stack에 element를 추가합니다.
  //새롭게 추가될 요소의 인덱스를 나타내는 this.top을 키로, 요소를 값으로 하여 storage에 할당합니다.this.top은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }
  // stack에서 element를 제거한 뒤 해당 element를 반환합니다.
  // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
  // top-1로 최상단을 설정한 후 변수에 저장하고, 스택에서 삭제합니다.
  // 하나를 제거했으니 top도 감소합니다.
  pop() {
    if (this.size() <= 0) {
      return;
    }
    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    return result;
  }
}



const stack = new Stack();

stack.size(); // 0
for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8

console.log(stack);