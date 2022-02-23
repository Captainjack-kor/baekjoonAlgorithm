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
  console.log(input);
  input = 1000 - input;
  let changeList = [500, 100, 50, 10, 5, 1];
  let count = 0;
  for(let i = 0; i < changeList.length; i++) {
    while(input - changeList[i] >= 0) {
        input -= changeList[i];
        count++;
    }
    console.log(input);
  }
  console.log(count);
  process.exit();
});

