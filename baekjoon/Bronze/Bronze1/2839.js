const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
  input = Number(line);
  rl.close();
}).on('close', function () {
  // console.log(input);
  // 3kg, 5kg
  let result = 0;
  let count = 0;
  while(true) {
    if(input % 5 === 0) {
      result += Math.floor(input / 5);
      result += count; 
      break;
    }

    if(input < 0) {
      result = -1;
      break;
    }

    input -= 3;
    count++
  }
  console.log(result);

  process.exit();
});

