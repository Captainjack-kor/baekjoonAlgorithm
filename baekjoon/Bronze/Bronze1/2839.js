const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
  input = Number(line);
  rl.close();
}).on('close', function () {
  // console.log(input);
  // 3kg, 5kg
  

  process.exit();
});

