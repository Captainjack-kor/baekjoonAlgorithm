const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input.split(' ').map(v => +v);
let graph = arr.map(v => v.split(' ').map(d => +d));
let visited = Array.from(Array(M), () => new Array(N).fill(0))
let queue = [];
let answer = [];
let max = 0;
let BFS = (y, x) => {
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  let index = 0;
  while(index !== queue.length) {
    let [tempY, tempX] = queue[index];
    for(let i = 0; i < dx.length; i++) {
      let nx = tempX + dx[i];
      let ny = tempY + dy[i];
      // if(nx < N && nx >= 0 && ny < M && ny >= 0) {
      if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue; 
      // console.log(visited[ny][nx], nx, ny)
      if(visited[ny][nx] >= 0) continue;
      visited[ny][nx] = visited[tempY][tempX] + 1;
      max = Math.max(max, visited[ny][nx]);
      queue.push([ny, nx]);
    }
    index++;
  }
} 
for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 1) {
      queue.push([i, j]);
    }

    if(graph[i][j] === 0) {
      visited[i][j] = -1;
    }
  }
}
BFS();
for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(visited[i][j] === -1) {
      answer.push(-1);
      break;
    } 
  }
}
answer.push(max);
console.log(answer[0]);