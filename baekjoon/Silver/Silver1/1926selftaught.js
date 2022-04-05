const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let BFS = (y, x) => {
  let queue = [[y, x]];
  //x,y => x + 1, y | x, y + 1 | x - 1, y | x, y - 1 |
  let pictureScale = 1;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  while(queue.length) {
    let [tempY, tempX] = queue.shift();
    for(let i = 0; i < dx.length; i++) {
      let nx = tempX + dx[i]; //TODO: 이부분 다시 봐야함 BFS(y, x)와 함께
      let ny = tempY + dy[i];

      if(ny < N && ny >= 0 && nx < M && nx >= 0) {
        if(graph[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = true;
          pictureScale++;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return pictureScale;
}

let [N, M] = input.split(' ').map(v => +v);
let vertex = arr.map(v => v.split(' ').map(data => +data));
let graph = vertex;

let visited = Array.from(Array(N), () => new Array(M).fill(false));
// console.log(visited);

let max = 0;
let count = 0;

for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if(graph[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      count++;
      // console.log(count);
      max = Math.max(max, BFS(i, j));
    }
  }
}

console.log(count); 
console.log(max);
// console.log(maxArr);
