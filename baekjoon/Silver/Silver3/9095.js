const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


// input.shift();

let memo = [];
memo[0] = 0;
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

for(let i = 1; i <= input.length - 1; i++) {
  let num = input[i];
  for(let j = 4; j <= num; j++) {
    memo[j] = memo[j - 1] + memo[j - 2] + memo[j - 3];
  }

  console.log(memo[num]);
}

