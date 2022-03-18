const fs = require("fs");
const [n, ...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
1 1 10
30 50 72`
)
  .trim()
  .split("\n");

let nArrNumber = Number(n);
let newArr = arr.map((e) => e.split(" "));
let nAnswer = "";

for (let i = 0; i < nArrNumber; i++) {
  let H = newArr[i][0],
    N = newArr[i][2];

  let answerH = N % H;
  if (answerH === 0) {
    answerH = H;
  }

  let answerW = Math.ceil(N / H);
  answerW < 10 ? (answerW = String(0) + answerW) : answerW;

  nAnswer += `${answerH}${answerW}` + "\n";
}

console.log(nAnswer);
