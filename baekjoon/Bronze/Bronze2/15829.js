const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


// console.log(input, arr);
let str = arr[0].split('');

// console.log(str);

let sum = 0;
let exec = 1;

for(let i = 0; i < str.length; i++) {
  sum += (str[i].charCodeAt() - 96) * exec;

  // let memo = [];
  // let exec = Math.pow(31, i);

  sum %= 1234567891;
  exec *= 31;
  exec %= 1234567891;

}

console.log(sum);