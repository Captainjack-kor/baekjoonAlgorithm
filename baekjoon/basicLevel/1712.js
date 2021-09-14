const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  input = input.split(' ');
  // console.log(input);
  let result = [];
  for(let i = 0; i < input.length; i++) {
    result.push(Number(input[i]));
  }
  console.log(result);
  let count = 0;
  
  while(result[0] + result[1] > result[2]) {
    result[0] = result[0] + result[1];
    count++;
    console.log(result);
  }
  console.log(count);
  process.exit();
});