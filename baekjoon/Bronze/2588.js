const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  let A = Number(input[0]);
  let B = Number(input[1]);
  let charA = input[0];
  let charB = input[1];


  console.log(A * Number(charB[2]));
  console.log(A * Number(charB[1]));
  console.log(A * Number(charB[0]));
  console.log(A * B);
  process.exit();
});