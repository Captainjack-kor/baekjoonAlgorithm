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
  console.log(input);
  let str = "abcdefghijklmnopqrstuvwxyz";
  let str_arr = [];
  for(let i = 0; i < str.length; i++) {
    str_arr.push(str[i]);
  }
  console.log(str_arr);
  
  process.exit();
});
