let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = +input;
let count = 1;
let start = 666;

while(input !== count) {
  start++;
  if(start.toString().includes('666')) {
    count++;
  }
}
console.log(start);
// console.log(count);