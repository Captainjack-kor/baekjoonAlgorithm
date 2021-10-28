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

  let room = 1;
  let value = 1;
  while(input >= 0) {
    value = value * 
    input - value;
  }

  console.log(room)
  process.exit();
});