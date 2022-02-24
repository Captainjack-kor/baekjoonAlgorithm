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
  console.log(input);
  let arr = [];
  arr = input[1].split(' ');
  let count = 0;
  let maxCount = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(Number(arr[i]) >= Number(arr[j])) {
        count++;
      } else {
        break;
      }
    }

    if(count > maxCount) {
      maxCount = count;
    } 
    count = 0;
  }
  console.log(maxCount);
  // console.log(arr);
  process.exit();
});

