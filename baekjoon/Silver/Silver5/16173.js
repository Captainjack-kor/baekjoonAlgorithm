const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +n;
const board = arr.map(v => v.split(' ').map(w => +w));
let isVisited = Array.from(Array(N), () => new Array(N).fill(false));
let queue = [];
queue.push([0, 0]);
isVisited[0][0] = true;
let answer = false;

// console.log(isVisited); //TODO: for test

while (queue.length > 0) {
  let [y, x] = queue.shift(); // (init) y = 0, x = 0;
  // 앞에서부터 하나씩 꺼내서 처리 됨..
  let vertex = board[y][x];
  if (vertex === -1) {
    answer = true;
    break;
  } else {
    if (y + vertex < N && !isVisited[y + vertex][x]) { //! 아래쪽으로 이동
      // isVisited[0 + 1][0]; vertex는 지금 현재 지점의 값
      queue.push([y + vertex, x])
      isVisited[y + vertex][x] = true;
    }
    if (x + vertex < N && !isVisited[y][x + vertex]) { //! 오른쪽으로 이동
      queue.push([y, x + vertex])
      isVisited[y][x + vertex] = true;
    }
  }

  // console.log(queue);
}

console.log(answer ? 'HaruHaru' : 'Hing');
