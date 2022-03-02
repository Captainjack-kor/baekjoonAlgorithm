const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  // console.log(input);
  input[0] = input[0].split(' ');
  input[1] = input[1].split(' ');
  let kgArr = [];
  let valueArr = [];
  for(let i = 0; i < input[0].length; i++) {
    valueArr.push(Number(input[0][i]));
  }
  for(let i = 0; i < input[1].length; i++) {
    kgArr.push(Number(input[1][i]));
  }

  valueArr.sort((a, b) => { return a - b; })
  kgArr.sort((a, b) => { return a - b; })
  
  let maxPrice = 0;
  while(valueArr.length > 0) {
    maxPrice += valueArr.pop() * kgArr.pop();
  }
  // console.log(valueArr, kgArr);
  console.log(maxPrice);
  process.exit();
});

