const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  let answer = input.split(' ');
  let A = BigInt(answer[0]);
  let B = BigInt(answer[1]);
  let result = A + B;
  console.log(result.toString());
  process.exit();
});
