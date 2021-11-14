const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = Number(line);
  rl.close();
}).on('close', function () {
  let str = "";
  for(let i = 1; i <= input; i++) {
    // if(i = )
    str = "*".repeat(i) + " ".repeat(input * 2 - i + 1); 
    console.log(str);
  }
  process.exit();
});