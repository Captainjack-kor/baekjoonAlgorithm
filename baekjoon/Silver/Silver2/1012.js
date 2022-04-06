const [T, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

console.log(T, arr);

// 쉬운데 귀찮음 보류

arr.forEach((el) => {
  // let [M, N, K] = el.split(' ');
  let [M, N, K] = el.split(' ').map(v => +v);
  if(K !== undefined) {
    let visited = Array.from(Array(N), () => new Array(M).fill(false));
    console.log(visited);
  } else {
    let graph = [];
    for(let i = 0; i < M; i++) {
      for(let j = 0; j < N; j++) {

      }
    }
  }
  console.log(M, N, K);
})