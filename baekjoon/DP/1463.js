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
  num = input;
  const DP = new Array(num + 1).fill(0);
  //10개면 11개 만듬.

  console.log(DP); 
  //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ...
  
  //1일땐 생각할 필요 없음. -> 문제가 1만들기 임

  for (let i = 2; i <= num; i++) { //2부터 입력 값까지
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
    console.log("-----------");
    console.log("i: " + i);
    console.log(DP);
    console.log("-----------");
  }

  console.log(DP[num]);

  process.exit();
});
