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

  let tempA = input[0];
  let tempB = input[1];
  let targetA = "";
  let targetB = "";
  let max = 0;
  let min = 0;

  // 6으로 다 고치면 맥스
  // 5로 다 고치면 민

  for(let i = 0; i < input[0].length; i++) {
    if(Number(input[0][i]) === 5) {
      targetA += "6";
    } else {
      targetA += input[0][i];
    }
  }
  for(let i = 0; i < input[0].length; i++) {
    if(Number(input[1][i]) === 5) {
      targetB += "6";
    } else {
      targetB += input[1][i];
    }
  }

  max = Number(targetA) + Number(targetB);

  targetA = "";
  targetB = "";

  for(let i = 0; i < tempA.length; i++) {
    if(Number(tempA[i]) === 6) {
      targetA += "5";
    } else {
      targetA += tempA[i];
    }
  }
  for(let i = 0; i < tempB.length; i++) {
    if(Number(tempB[i]) === 6) {
      targetB += "5";
    } else {
      targetB += tempB[i];
    }
  }

  min  = Number(targetA) + Number(targetB);


  console.log(min, max);

  process.exit();
});

