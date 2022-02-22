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
  //input = input.split("");
  // console.log(input);
  let count = 0;
  let checkArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let temp = [];
 
  function solution(input) {
    for (let i of checkArr) {
      input = input.split(i).join("#");
    }
  
    return input.length;
  }

  
  //console.log(input);
  console.log(solution(input));

  process.exit();
});
