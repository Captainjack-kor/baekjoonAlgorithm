const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(Number(input[0]) === input.length - 1) {
    rl.close();
  }
}).on('close', function () {
  input.shift();
  //console.log(input);
  let count = 0;
  let newArr = [];
  let answer = "";
  let result = "";
  for(let i = 0; i < input.length; i++) {
    newArr= input[i].split(' ');
    count = Number(newArr[0]);
    answer = newArr[1];
    newArr= [];

    for(let j = 0; j < answer.length; j++) {
      result = result + answer[j].repeat(count);
    }
    console.log(result);
    result = "";
  }
  
  //console.log(count);

  process.exit();
});
