const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


// input.shift();

let memo = [];
memo[0] = 0;
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

//결국 어떤 앞의 수에서 끝에 1, 2, 3을 더하는 것이 되므로, 
//현재값 -1, 현재값 -2, 현재값 -3의 횟수를 더한 값이 현재값의 총 횟수인 것이다.

for(let i = 1; i <= input.length - 1; i++) {
  let num = input[i];
  for(let j = 4; j <= num; j++) {
    memo[j] = memo[j - 1] + memo[j - 2] + memo[j - 3];
  }

  console.log(memo[num]);
}

