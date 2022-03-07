//* 출처:  https://jaekwan.tistory.com/113

const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const NMV = input.shift().split(' ').map(v => +v);
const N = NMV[0];
const M = NMV[1];
const V = NMV[2];

// graph = new Array(N + 1).fill(0, 0, N + 1);
// graph = new Array(N + 1).fill(0);
// for (let i = 0; i <= N + 1; i++) {
//   graph[i] = new Array(N + 1).fill(0);
// } 

//TODO: 이걸 한줄로 줄이면?
graph = Array.from(Array(N + 2), () => new Array(N + 1).fill(0));

// console.log(input);
for (let i = 0; i < M; i++) {
  const xy = input.shift().split(' ').map(v => +v);
  const x = xy[0];
  const y = xy[1];

  graph[x][y] = 1;
  graph[y][x] = 1; 
}


let visited = new Array(N + 1).fill(false);
let stack = [];

let DFS = function (node) {
  let answer = '';
  // let visited = new Array(N + 1).fill(false);

  // let stack = [];
  // stack.push(node);
  // while (stack.length > 0) {
  //   let cur = stack.pop();

  //   if (!visited[cur]) {
  //     visited[cur] = true;
  //     answer += cur + ' ';
  //     for (let next = N; next >= 1; next--) {
  //       if (!visited[next] && graph[cur][next])
  //         stack.push(next);
  //     }
  //   }
  // }

  visited[node] = true;
  stack.push(node);

  for(let i = 1; i < N + 1; i++) {
    if(graph[node][i] && !visited[i]) {
      DFS(i);
    }
  }


  // console.log(stack.join(' '));
  

  // console.log(answer);
}


let BFS = function (node) {
  let answer = '';
  let visited = new Array(N + 1).fill(false);
  visited[node] = true;  

  let Queue = [];
  Queue.push(node);

  while (Queue.length > 0) {
    let cur = Number(Queue.shift());
    answer += cur + ' ';
    for (let next = 1; next <= N; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        Queue.push(next);
      }
    }
  }
  console.log(answer);
}


DFS(V);
console.log(stack.join(' '));
BFS(V);

console.log(graph);
