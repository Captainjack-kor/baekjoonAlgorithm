const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let areaLength = +input;
let tomato = arr.map(v => v.split('').map(v => +v));
// console.log(temp);

//* 정사각형
let visited = Array.from(Array(areaLength), () => new Array(areaLength).fill(false));
let graph = tomato;
// console.log(visited);
let count = 0;
let answer = [];
let max = 0;
let potList = [];

let BFS = (y, x) => {
  let queue = [[y, x]]; // push([y, x])
  // x,y축  x+1,y || x, y-1 || x-1,y || x, y+1
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];

  let potCount = 1;

  while(queue.length) {
    let [tempY, tempX] = queue.shift();
    for(let i = 0; i < dx.length; i++) {
      let nx = tempX + dx[i];
      let ny = tempY + dy[i];
      if(ny < areaLength && ny >= 0 && nx < areaLength && ny >= 0) {
        if(graph[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = true;
          potCount++;
          queue.push([ny, nx]);
        }
      }
    }
  }
  potList.push(potCount);
  return potCount;
}

for(let i = 0; i < areaLength; i++) {
  for(let j = 0; j < areaLength; j++) {
    if(!visited[i][j] && graph[i][j] === 1) {
      count++;
      visited[i][j] = true;
      max = Math.max(max, BFS(i, j));
    }
  }
}

answer.push(count);
potList.sort((a, b) => a - b);
answer = answer.concat(potList);
console.log(answer.join('\n'));
// console.log(potList);
// answer.push();
