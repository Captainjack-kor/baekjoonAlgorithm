const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 1) {
    rl.close();
  }
}).on('close', function () {
  let A = Number(input[0]);

  //윤년은 연도가 4의 배수이면서, 
  //100의 배수가 아닐 때 또는 400의 배수일 때이다.
  if(A % 4 === 0 && A % 100 !== 0) {
    console.log("1");
  } else if(A % 4 === 0 && A % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }

  process.exit();
});