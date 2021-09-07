const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length >= 9) {
    rl.close();
  }
}).on('close', function () {
  let newArr = input;
  newArr = newArr.map((e) => Number(e));
  //console.log(newArr);
  let max = Math.max(...newArr);
  console.log(max);
  console.log(newArr.indexOf(max) + 1);

  process.exit();
});