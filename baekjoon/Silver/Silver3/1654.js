const [input, ...arr]= require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [K, N] = input.split(' ').map(v => +v);

let lan = arr.map(v => +v);

let sum = lan.reduce((acc, cur) => acc + cur);
let target = Math.floor(sum / N);

while(true) {
  let count = 0;
  for(let i = 0; i < K; i++) {
    count += Math.floor((lan[i] / target));
  }

  if(count === N) {
    break;
  }
  
  target--;
} 

console.log(target);