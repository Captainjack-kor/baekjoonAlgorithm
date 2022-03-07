const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = Number(input);

const DP = new Array(answer + 1).fill(0);

DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= answer; i++) {
    DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}
console.log(DP[answer]);

