const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.split(' ').map(v => +v);
let graph = arr.map(v => v.split(' ').map(d => +d));
// console.log(graph)
let visited = Array.from(Array(M), () => new Array(N).fill(0))

let queue = [];

let BFS = (y, x) => {
  // queue = [[y, x]];
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  console.log("Q: " + queue);
  while(queue.length) {
    let [tempY, tempX] = queue.shift();
    for(let i = 0; i < dx.length; i++) {
      let nx = tempX + dx[i];
      let ny = tempY + dy[i];
      if(nx < N && nx >= 0 && ny < M && ny >= 0) {
        if(visited[ny][nx] >= 0) {
          continue;
        }
        visited[ny][nx] = visited[tempY][tempX] + 1;
        queue.push([ny, nx]);
      }
    }
  }
}

// console.log(graph);

let answer = 0;

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 1) {
      queue.push([i, j]);
      // console.log(queue);
      BFS(i, j);
      // Math.max(answer, BFS(i, j));
    }
    // if(graph[i][j] === 0) {
    //   visited[i][j] = -1;
    // }
  }
}


console.log(visited);

// for(let i = 0; i < M; i++) {
//   for(let j = 0; j < N; j++) {
//     if(visited[i][j] === -1) {
//       return 0;
//     }
//     answer = Math.max(answer, )
//   }
// }