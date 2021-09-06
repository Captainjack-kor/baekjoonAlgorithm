const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 1) {
    rl.close();
  }
}).on('close', function () {
  let Num = Number(input[0]);

  for(let i = 1; i <= 9; i++) {
    console.log(Num + " * " + i + " = " + Num*i);
  }

  process.exit();
});