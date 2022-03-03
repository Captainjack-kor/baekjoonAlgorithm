const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +n;
let list = arr.map(v => v.split(' ').map(el => +el));

// 5 => 1, 5
// 6 => 1,2,3
function isPrime(num) {
  if(num === 1 || num === 0) {
    return false;
  }
  for(let i = 2; i <= Math.floor(num / 2); i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

let count = 0;

list[0].forEach((el) => isPrime(el) ? count++ : "");
// list[0].forEach((el) => console.log(el));

console.log(count);
