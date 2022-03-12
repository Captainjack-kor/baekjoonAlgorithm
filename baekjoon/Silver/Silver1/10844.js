const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 1 2 3 4 5 6 7 8 9 -> 9
// 13 21 23 32 34 43 45 54 56 65 67 76 78 87 89 98 100 -> 17

// 121 123 232 234 343 345

// 자릿수가 하나일 경우 기존의 경우의 수를 저장하고 길이가 길어질떄만 계산
// 근데 계산하는게 어렵네

const N = Number(input[0]);
const memo = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
// 초기 1자리 셋팅 1~9까지
let t = N - 1;
while (t--) {
  memo.push([...Array(10)]); 
}

// console.log(memo);

for (let n = 1; n < N; n++) {
  for (let i = 0; i <= 9; i++) {
    memo[n][i] = ((memo[n - 1][i - 1] || 0) + (memo[n - 1][i + 1] || 0)) % 1000000000;
  }
}

const result = memo[N - 1].reduce((acc, curr) => {
  return (acc + curr) % 1000000000;
}, 0);

console.log(result);
