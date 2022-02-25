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

  let min = Math.abs(new_arr[1] - new_arr[0]);
  let temp = Math.abs(new_arr[1] - new_arr[0]);
  for(let i = 0; i < new_arr.length - 1; i++) { 
    // if(new_arr[i + 1] - new_arr[i] >= 0) {
      temp = Math.abs(new_arr[i + 1] - new_arr[i]);

      if(min >= temp) {
        min = temp;
      } 
    // } 

    // console.log(temp);
    // if(min >= temp) {
    //   min = temp;
    // } 
    // temp = 0;
  }

  console.log(min);
  process.exit();
});

