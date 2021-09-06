const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length -1 === Number(input[0])) {
    rl.close();
  }
}).on('close', function () {
  input.shift();
  //console.log(input);
  for(let i = 0; i < input.length; i++) {
    let result = input[i].split(' ');
    //console.log(result);
    let A = Number(result[0]);
    let B = Number(result[1]);
    //console.log(A + " " + B)
    console.log(A + B);
  }
  process.exit();
});