const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
// console.log(input);
// let visited = Array.from({ length: 7 }).fill(false);
let result =  Array(7);
const dfs = (index, count, sum) => {
  if(sum > 100) return;
  if(count === 7) {
    if(sum === 100) {
      console.log(result.sort((a, b) => a - b).join('\n'));
    }
    return
  }
  for(let i = index; i < 9; i++) {
    if(count === 0 && i === 3) break;
    const nextSum = sum + input[i];
    result[count] = input[i];
    dfs(i + 1, count + 1, nextSum);
  }
}
dfs(0, 0, 0); 

// console.log(temp);
// console.log(result.sort((a, b) => a - b).join('\n'));