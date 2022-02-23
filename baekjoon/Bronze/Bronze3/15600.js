const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  // input.push(line);
  input = line;
  rl.close();
}).on('close', function () {
  if(Number(input) === 1 || Number(input) === 2) {
    console.log(1)
  } else {
    input -= 2;
    console.log(input);
  }

  process.exit();
});

