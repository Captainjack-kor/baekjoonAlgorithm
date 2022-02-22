const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
  // rl.close();
}).on('close', function () {
  // console.log(input);
  for(let i = 0; i < input.length; i++) {
    let temp = [];
    temp = input[i].split(' ');
    // console.log(input)
    // for(let i = 0; i < input.length; i++) {
    //   input[i] = Number(input[i]);
    // }

    // input.sort((a, b) => { return a - b});
    // console.log(input);

    let countA = 0;
    let countB = 0;

    countA = Number(temp[1]) - Number(temp[0]);
    countB = Number(temp[2]) - Number(temp[1]);
    // for(let i = input[0]; i < input[1]; i++) {
    //   countA++;
    // }
    // for(let i = input[1]; i < input[2]; i++) {
    //   countB++;
    // }

    // if(countA !== 0) {
    //   --countA;
    // }
    // if(countB !== 0) {
    //   --countB;
    // }

    // console.log(--countA);
    // console.log(--countB);

    if(countA > countB) {
      countA -= 1;
      console.log(countA);
    } else {
      countB -= 1;
      console.log(countB);
    }
  }

  process.exit();
});