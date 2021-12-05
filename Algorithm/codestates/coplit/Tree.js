/*

* Implementation Tree
Tree 구현을 위한 기본적인 코드가 작성되어 있습니다. Tree 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

맴버 변수
입력 데이터를 담을 수 있는 value
하위 노드를 저장할 수 있는 Array 타입의 children

메서드
insertNode(value): 입력받은 value를 Tree에 계층적으로 추가할 수 있어야 합니다.
contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.

주의사항
value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한합니다.

사용 예시

const rootNode = new Tree(null);

for(let i = 0; i <= 4; i++) {
  if(rootNode.children[i]) {
    rootNode.children[i].insertNode(i)
  }
 rootNode.insertNode(i); 
}
rootNode; // {value: null, children: Array(5)}
rootNode.contains[5]; //false
rootNode.contains[1]; //true
...

*/



class Tree {
  //tree의 constructor를 구현합니다.
  //tree의 자식 노드들을 children으로 할당하여 노드의 자식 노드들을 담을 수 있게 설정합니다.
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  //tree의 자식 노드를 생성 한 후에, 노드의 children에 push해 줍니다.
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }
  // tree에서 value값을 탐색합니다.
  // 현재 노드의 value 값이 찾는 값과 일치한다면 return합니다.
  contains(value) {
    if (this.value === value) {
      return true;
    }
    // 노드가 가진 자식 노드를 순회하는 반복문으로 노드의 children 배열을 탐색합니다.
    for (let i = 0; i < this.children.length; i += 1) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}


const rootNode = new Tree(null);

for(let i = 0; i <= 4; i++) {
  if(rootNode.children[i]) {
    rootNode.children[i].insertNode(i)
  }
 rootNode.insertNode(i); 
}
console.log(rootNode); // {value: null, children: Array(5)}
// rootNode.contains[5];
console.log(rootNode.contains[5]); //false
console.log(rootNode.contains[1]); //true