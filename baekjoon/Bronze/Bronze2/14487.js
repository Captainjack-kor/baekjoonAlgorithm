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
  let arr = input[1].split(' ');
  // console.log(arr);
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]));
  }
  newArr.sort((a, b) => { return a - b; })
  // console.log(newArr);
  let result = 0;

  for(let i = 0; i < newArr.length - 1; i++) {
    result += newArr[i];
  }
  console.log(result);

  process.exit();
});

