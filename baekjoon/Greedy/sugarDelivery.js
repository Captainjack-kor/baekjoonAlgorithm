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
  // 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
  console.log(input);
  
  process.exit();
});

