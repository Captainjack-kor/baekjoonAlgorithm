const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let target = +input[0];

function fibo(n) {
  let memo = [0, 1];
  let aux = (n) => {
    if(memo[n] !== undefined) {
      return memo[n];
    } else {
      memo[n] = aux(n - 1) + aux(n - 2);
      return memo[n]
    }
  }
  return aux(n);
}

console.log(fibo(target))