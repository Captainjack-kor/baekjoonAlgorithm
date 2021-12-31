//* DFS Algorithm
//! 출처: https://ryusm.tistory.com/48
/*
*자료구조 스택과 큐를 활용
* needVisit 스택과 visited 큐, 두 개의 자료 구조를 생성한다.
* 큐와 스택 구현은 별도의 라이브러리를 활용할 수도 있지만 간단히 배열을 통해 구현하자.
* BFS 구조는 두 개의 큐를 활용하는데, DFS는 한 개의 스택과 한 개의 큐를 사용한다는 차이가 있음
* BFS 구조는 이전 노드와 연결된 노드들을 먼저 탐색해야 하기 때문에 queue. 
* DFS는 이전 노드가 아니라 자기 자신과 연결되었던 노드들 먼저 탐색하기 때문에 stack을 사용한다.
*/
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      //  없다면 진행
      visitedQueue.push(node);
      // 노드 밀어넣고
      // 재귀
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));

// ["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]