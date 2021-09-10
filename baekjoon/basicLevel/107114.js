const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  //console.log(input[0]);
  if(Number(input[0]) === input.length - 1) {
    rl.close();
  }
}).on('close', function () {
  input.shift();
  //console.log(input);
  let count = 0;
  let result = 0;
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      //console.log(input[i][j]);
      if(input[i][j] === 'X') {
        count = 0;
      } else {
        count = count + 1;
      }
      result = result + count;
      //console.log(result);
    }
    console.log(result);
    count = 0;
    result = 0;
  } 

  process.exit();
});


