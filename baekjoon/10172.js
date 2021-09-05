const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {

  let input = line.split(' ');

  
  let A = Number(input[0]);
  let B = Number(input[1]);

  console.log(A+B);
  rl.close();
}).on('close', function () {
  process.exit();
});

