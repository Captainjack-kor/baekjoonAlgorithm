const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//const [index, ...rest] = input;
let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 1) {
    rl.close();
  }
}).on('close', function () {
  
  for(let i = 0; i < input[0]; i++) {
    console.log("*");
  }

  process.exit();
});
