const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length > 1) {
    rl.close();
  }
}).on('close', function () {
  input.shift();
  //console.log(input);
  let newArr = input[0].split(' ');
  newArr = newArr.map((e) => Number(e));
  //console.log(newArr);
  let max = Math.max(...newArr);
  let min = Math.min(...newArr);
  //console.log(min + " " + max);
  console.log(`${min} ${max}`);
  process.exit();
});

