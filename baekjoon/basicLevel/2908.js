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
  //console.log(input);
  let result = "";
  for(let i = input.length -1; i >= 0; i--) {
    result += input[i];
  }

  result = result.split(" ");
  //console.log("???: "+result);
  if(result[0] > result[1]) {
    console.log(result[0]);
  } else {
    console.log(result[1]);
  }
  process.exit();
});
