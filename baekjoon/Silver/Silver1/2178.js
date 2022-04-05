const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let BFS = (y, x) => {
  let queue = [[y, x]];
  // x기준 => 1,0 | 0, 1 | -1 0 | 0 -1 
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  while(queue.length) {
    let [tempY, tempX] = queue.shift();
    for(let i = 0; i < dx.length; i++) {
      let nx = tempX + dx[i];
      let ny = tempY + dy[i];
      if(ny < N && ny >= 0 && nx < M && nx >= 0) {
        if(graph[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = visited[tempY][tempX] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return 0;
}

let [N, M] = input.split(' ').map(v => +v);
let vertex = arr.map(v => v.split('').map(v => +v));

let graph = vertex;
let visited = Array.from(Array(N), () => Array(M).fill(0));

// console.log(vertex);
// console.log(graph);


for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if(graph[i][j] === 1 && !visited[i][j]){
      visited[i][j] = 1;
      BFS(i, j);
    }
  }
}
console.log(visited[N - 1][M - 1]);
// console.log(graph[N - 1][M - 1]);
