const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let input = line.split(' ');

  //첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
  let A = Number(input[0]);
  let B = Number(input[1]);

  console.log(A+B);
  console.log(A-B);
    console.log(Math.floor(A/B));
    console.log(A%B);
  rl.close();
}).on('close', function () {
  process.exit();
});