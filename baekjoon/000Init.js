const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(line);
  rl.close();
}).on('close', function () {
  process.exit();
});


// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(input);

// let result = input.split(" ");
// console.log(result);