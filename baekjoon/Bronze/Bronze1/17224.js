const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  console.log(line[0])
  let answer = line[0].split(' ');
  if(Number(answer[0]) === input.length) {
    rl.close();
  }
}).on('close', function () {
  console.log(input);
  process.exit();
});