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

  if(A > 0 && B > 0) {
    console.log("1");
  } else if(A > 0 && B < 0) {
    console.log("4");
  } else if(A < 0 && B > 0) {
    console.log("2");
  } else {
    console.log("3");
  }
  process.exit();
});