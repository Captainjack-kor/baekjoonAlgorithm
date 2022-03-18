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
  let answer = "";
  for(let i = 0; i < input[0]; i++) {
    for(let j = 0; j <= i; j++) {
      answer += "*";
    }
    console.log(answer);
    answer = "";
  }
  process.exit();
});
