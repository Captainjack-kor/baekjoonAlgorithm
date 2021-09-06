const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";

rl.on('line', function (line) {
  let Num = Number(line);

  for(let i = 1; i <= Num; i++) {
    answer += i + '\n';
  }

  rl.close();
}).on('close', function () {
  
  console.log(answer);
  process.exit();
});