const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let BFS = (y, x) => {
  let result = 1;
  let queue = [[y, x]];
  let directionX = [0, 0, 1, -1];
  let directionY = [1, -1, 0, 0];

  while (queue.length !== 0) {
      let [targetY, targetX] = queue.shift();
      for (let i = 0; i < 4; i++) {
      let positionX = targetX + directionX[i]; 
      let positionY = targetY + directionY[i]; 
      if (positionY < N && positionY >= 0 && positionX < M && positionX >= 0) {
        if (board[positionY][positionX] === 1 && !visited[positionY][positionX]) {
          visited[positionY][positionX] = true;
          queue.push([positionY, positionX]);
          result++;
        }
      }
    }
  }
  return result;    
}

// console.log(arr);
// console.log(input);
let [N, M] = input.split(' ').map(v => +v);
let vertex = arr.map(v => v.split(' ').map(v => +v));
// console.log(N, M);

let board = [];
let visited = [];

board = vertex;
visited = Array.from(Array(N), () => new Array(M).fill(false));


let count = 0;
let max = 0;

for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if(board[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      count++;
      max = Math.max(max, BFS(i, j));
    }
  }
}

console.log(count);
console.log(max);

// let board = [
//  [1,1,1,0,1,0,0,0,0,0],
//  [1,0,0,0,1,0,0,0,0,0],
//  [1,1,1,0,1,0,0,0,0,0],
//  [1,1,0,0,1,0,0,0,0,0],
//  [0,1,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
// ];

// const BFS = (start) => {
//   let visited = [];
//   let needVisit = [];

//   needVisit.push(start);
//   visited[start] = true;
  
//   while(needVisit.length !== 0) {
//     let x = needVisit.shift();
//     for(let i = 0; i < board[x].length; i++) {
//       let y = board[x][i];
//       if(!visited[y]) {
//         needVisit.push(y);
//         visited[y] = true;
//       }
//     }
//   }
// }
