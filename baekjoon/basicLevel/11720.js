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
  //console.log(input);
  //let result = input[0].charCodeAt(0);
  let sum = 0;
  for(let i = 0; i < input[1].length; i++) {
    sum = sum + Number(input[1][i]);
  }
  console.log(sum);
  process.exit();
});

