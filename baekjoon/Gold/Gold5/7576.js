const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.split(' ').map(v => +v);
let graph = arr.map(v => v.split(' ').map(d => +d));
// console.log(graph)
let visited = Array.from(Array(M), () => new Array(N).fill(false))
// let dist = Array.from(Array(M), () => new Array(N).fill(0))

let queue = [];
// console.log(graph);

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 1) {
      visited[i][j] = true;
      queue.push([i, j]);
    }

    // if(graph[i][j] === 0) {
    //   dist[i][j] = -1;
    // }
  }
}


// console.log(dist);

let max = 0;
let index = 0;
let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];

while(queue.length) {
  let [tempY, tempX] = queue.shift();
  for(let i = 0; i < dx.length; i++) {
    let nx = tempX + dx[i];
    let ny = tempY + dy[i];
    if(nx < N && nx >= 0 && ny < M && ny >= 0) {
      // if(graph[ny][nx] === 0 && !visited[ny][nx]) {
      if(graph[ny][nx] >= 0 && !visited[ny][nx]) {
        visited[ny][nx] = true;
        graph[ny][nx] = graph[tempY][tempX] + 1;
        // if(max < graph[ny][nx]) {
        //   max = graph[ny][nx];
        // }

        max = Math.max(max, graph[ny][nx]);
        queue.push([ny, nx]);
      }
      // if(visited[ny][nx] >= 0) {
      //   continue;
      // }
      // visited[ny][nx] = visited[tempY][tempX] + 1;
      // queue.push([ny, nx]);
    }
  }
}

// console.log(max);

let answer = [];

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(graph[i][j] === 0) {
      answer.push(-1);
      break;
    } 
  }
}

if(max === 0) {
  answer.push(0);
} else {
  answer.push(max - 1);
}

// console.log(visited);
console.log(answer[0]);

// console.log(visited);
// console.log(graph)
// console.log(count);