const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
// console.log(input);
let visited = Array.from({ length: 10 }).fill(false);
let sum = input.reduce((acc, cur) => { return acc + cur }, 0);
let result =  []; 

let dfs = (node, temp) => {
  if(node === 2) {
    if(sum - temp === 100) {
      return 1;
    }
    return 0;
  }
  for(let i = 0; i < 9; i++) {
    if(visited[i]) continue;
    visited[i] = true;
    if(dfs(node + 1, temp + input[i]) === 1) return 1;
    visited[i] = false;
  }
  return 0;
}

for(let i = 0; i < 9; i++) {
  if(!visited[i]) {
    result.push(input[i]);
  }
}

dfs(0,0);

console.log(result);