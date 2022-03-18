const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 3) {
    rl.close();
  }
}).on('close', function () {
  let newArr = input;
  newArr = newArr.map((e) => Number(e));

  //console.log(newArr);
  let result = newArr.reduce((acc, cur) => {
    return acc * cur;
  }, 1)

  //console.log(result);

  let count = 0;
  let temp = String(result);
  //console.log(typeof(temp));
  for(let i = 0; i <= 9; i++) {
    for(let j = 0; j < temp.length; j++) {
      if(Number(temp[j]) === i) {
        count++;
      }
    }
    console.log(count);
    count = 0;
  }
  process.exit();
});