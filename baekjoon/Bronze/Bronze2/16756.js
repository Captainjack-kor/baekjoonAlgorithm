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
  let arr = [];
  arr = input[1].split(' ');
  let new_arr = [];
  for(let i = 0; i < arr.length; i++) {
    new_arr.push(Number(arr[i]));
  }

  console.log(new_arr);
  let min = 100000;
  let temp = 0;
  for(let i = 0; i < new_arr.length; i++) { 
    if(new_arr[i] && new_arr[i + 1]) {
      if(new_arr[i + 1] - new_arr[i] < 0) {
        temp = new_arr[i] - new_arr[i + 1]
      } else {
        temp = new_arr[i + 1] - new_arr[i];
      }
      console.log(temp);
      if(min > temp) {
        min = temp;
      } 
      temp = 0;
    } else {
      break;
    }
  }

  console.log(min);
  process.exit();
});

