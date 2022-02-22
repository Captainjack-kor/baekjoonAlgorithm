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
  // console.log(input);
  let time = Number(input);
  let A = 0;
  let B = 0;
  let C = 0;
  // 5분 1분 10초
  // 100초 = > 1분 + 40초
  //5분 => 300초
  //1분 => 60초
  while(time > 0) {
    if(time >= 300) {
      A++;
      time -= 300;
    } else if (time >= 60) {
      B++;
      time -= 60;
    } else {
      C++;
      time -= 10;
    }
  }

  if(time < 0) {
    console.log(-1);
  } 

  if(time === 0) {
    console.log(A + ' ' + B + ' ' + C);
  }
  process.exit();
});
 