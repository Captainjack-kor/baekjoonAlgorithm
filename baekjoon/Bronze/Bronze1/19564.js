const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  // console.log(input);
  let str = "abcdefghijklmnopqrstuvwxyz";
  let str_arr = [];
  for(let i = 0; i < str.length; i++) {
    str_arr.push(str[i]);
  }
  let count = 1;
  let cur = 0;
  for(let i = 0; i < input.length; i++) {
    if(str_arr.indexOf(input[i]) === -1 ||  str_arr.indexOf(input[i + 1]) === -1) {
      break;
    }

    // console.log("i: " + str_arr.indexOf(input[i]));
    // console.log("i + 1: " + str_arr.indexOf(input[i + 1]));

    if(str_arr.indexOf(input[i + 1]) <= str_arr.indexOf(input[i])) {
      count++;
    }

  }
  
  console.log(count);
  process.exit();
});
