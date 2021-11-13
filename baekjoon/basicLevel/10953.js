const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(Number(input[0]) === input.length - 1){
    rl.close();
  }
}).on('close', function () {
  let sum = 0;
  let result = [];
  input.forEach((element, index) => {
      if(index > 0) {
        sum += Number(element.split(",")[0]) + Number(element.split(",")[1]); 
        result.push(sum);
        sum = 0;
      }
      // console.log("test: " + Number(element.split(",")[0]));

  });
  // console.log("sum: " + sum);
  result.forEach((el) => {
    console.log(el);
  })
  // console.log(result);

  process.exit();
});

