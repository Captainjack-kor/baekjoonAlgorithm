const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  // input.push(line);
  input = Number(line);
  // input = line;
  rl.close();
}).on('close', function () {
  let str = "";
  // console.log(2 * input -1 );
  for(let i = 1; i <= input; i++) {
    str = " ".repeat(input - i) + "*".repeat(i * 2 - 1); 
    console.log(str);
  }
  process.exit();
});