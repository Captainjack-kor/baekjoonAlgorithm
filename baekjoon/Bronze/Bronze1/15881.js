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
  console.log(input);
  input = input[1];
  let count = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[i] === 'p') {
      if(input[i + 1] === 'P') {
        if(input[i + 2] === 'A') {
          if(input[i + 3] === 'p') {
            count++;
            i += 3;
          }
        }
      }
    }
  }

  console.log(count);
  process.exit();
});
