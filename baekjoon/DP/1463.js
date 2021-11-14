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
  //X가 3으로 나누어 떨어지면, 3으로 나눈다.
  //X가 2로 나누어 떨어지면, 2로 나눈다.
  //1을 뺀다.
  let count = 0;
  if(input === 1) {
    console.log(0);
    process.exit();
  }

  while(input > 1) {
    if(input % 3 === 0) {
      input = input /  3;
      count++;
    } else if(input % 2 === 0) {
      input = input / 2;
      count++;
    } else {
      input -= 1;
      count++;
    }
    console.log(input);
  }
  console.log(count);
  process.exit();
});