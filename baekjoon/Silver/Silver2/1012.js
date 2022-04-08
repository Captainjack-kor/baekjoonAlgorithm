const [T, Test, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(T, arr);
let t = +T;
while(t--) {
  let [M, N, K] = Test.split(' ').map(v => +v);
  let visited = Array.from(Array(M), () => new Array(N).fill(0));
  arr.forEach((el) => {
    let [X, Y] = el.split(' ');
    visited[X][Y] = 1;
  })
  console.log(visited);
}
