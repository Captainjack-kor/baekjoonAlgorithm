const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 10) {
    rl.close();
  }
}).on('close', function () {
  let temp = [];
  // //console.log(input.length);
  // for(let i = 0; i < input.length; i++) {
  //   if(temp.indexOf(Number(input[i]) % 42) === -1) {
  //     temp.push(Number(input[i]) % 42);
  //   }
  // }
  // //console.log(temp);
  // console.log(temp.length);

  //console.log(input);
  let newArr = input.map((e) => Number(e));
  //console.log(newArr);
  //let answer = [];
  let answer = newArr.map((n) => {
    return n % 42;
  })

  //console.log(answer);

  for(let i = 0; i < answer.length; i++) {
    if(temp.indexOf(answer[i]) === -1) {
      temp.push(answer[i]);
    }
  }

  //10에서 겹치는거 뺌 
  //console.log(temp);
  console.log(temp.length);

  process.exit();
});
