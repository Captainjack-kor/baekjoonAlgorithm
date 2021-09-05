const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {

  let input = line.split(' ');

  //첫째 줄에 (A+B)%C, 
  //둘째 줄에 ((A%C) + (B%C))%C, 
  //셋째 줄에 (A×B)%C, 
  //넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
  let A = Number(input[0]);
  let B = Number(input[1]);
  let C = Number(input[2]);

  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C) * (B%C))%C);
    
  rl.close();
}).on('close', function () {
  process.exit();
});