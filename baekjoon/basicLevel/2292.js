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
  /*
  (room)  
    1 = 1(1)
    2 = 6(7)
    3 = 12(19)
    4 = 18(37)
    5 = 24(61)
  */

  let value = 1;
  let i = 1;
  let sum = 1;
  if(Number(input) === 0) {
    console.log(0);
  } else if(input === "1"){
    console.log(1);
  } else if(Number(input) >= 2 && Number(input) <= 7) {
    console.log(2);
  } else {
    while(input - sum > 0) {
      value = i * 6;
      sum += value;
      i++;
    }
    console.log(i);
  }

  process.exit();
});