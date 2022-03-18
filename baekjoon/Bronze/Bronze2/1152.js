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
  //console.log(input);
  if(input.length === 0 || input === " ") {
    console.log(0);
  } else {
    console.log(input.trim().split(' ').length);
  }
  process.exit();
});

