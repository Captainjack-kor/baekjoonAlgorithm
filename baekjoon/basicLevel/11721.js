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
  let result = "";
  for(let i = 0; i < input.length; i++) {
    if(i % 10 === 0 && i > 0) {
      result = result + "\n" + input[i];
    } else {
      result = result + input[i];
    }
  }
  console.log(result);
  process.exit();
});