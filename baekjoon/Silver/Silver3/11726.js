const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 2 * n

// 2 * 1 = 2 (1)
// 2 * 2 = 4 (4)
// 2 * 3 = 6 

let answer = Number(input);

const DP = new Array(answer + 1).fill(0);

DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= answer; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}
console.log(DP[answer]);

/*
맨 마지막에 1개(세로)를 놓을 것인가, 2개(가로)를 놓을 것인가를 결정한다.
만약 1개를 놓는다고 생각하면 n-1개에 대해서 다시, 
1개를 놓을지 2개를 놓을지 고민한다.
만약 2개를 놓기로 했다면, n-2개에 대해서 다시,
 1개를 놓을지 2개를 놓을지 고민한다.

왜냐하면, n-1개를 모두 메꾸고 마지막에 1개를 놓는 경우의 수는 
결국 n개의 마지막이 1개짜리인 경우와 같고,

n-2개를 모두 메꾸고 마지막에 2개를 놓는 경우의 수는 
결국 n개의 마지막이 2개짜리인 경우와 같으니,
결국 i번째에 놓을 최대 수는 i-1과 i-2에 놓일 최대 수의 합이다.
*/


