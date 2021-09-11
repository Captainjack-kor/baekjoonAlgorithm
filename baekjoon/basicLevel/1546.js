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
  //console.log(input);
  let subject = input.shift();
  let sum = 0;
  let newArr = input[0].split(' ');
  newArr.sort((a,b) => b-a);

  let max = newArr[0];
  // console.log(max);
  for(let i = 0; i < newArr.length; i++) {
    
    // console.log(newArr[1])
    newArr[i] = (newArr[i] / max) * 100;
    //console.log(newArr[i])

  }

  // console.log(typeof(newArr[0]));

  for(let i = 0; i < newArr.length; i++) {
    sum = sum + Number(newArr[i]);
  }
  //console.log(sum);
  //console.log(subject)

  console.log((sum / Number(subject)));
  process.exit();
});

