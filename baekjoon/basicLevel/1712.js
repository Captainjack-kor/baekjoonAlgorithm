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
  //console.log(result);
  let count = 1;

  let A = Number(result[0]);
  let B = Number(result[1]);
  let C = Number(result[2]);
  
  let N = A / (C - B);
  
  let answer = Math.floor(N) + 1;
  
  if(B >= C) {
    answer = -1;
  } 
  
  console.log(answer);
  process.exit();
});