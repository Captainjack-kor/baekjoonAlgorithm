const { count } = require('console');
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
  // console.log(input);
  let result = 0;

  
  function factorial(num) {
    if(num <= 1) {
      return 1;
    } 
    return num * factorial(num - 1);
  }
  
  if(input === 0) {
    console.log(1);
  } else {
    console.log(factorial(input));
  }
  process.exit();
});