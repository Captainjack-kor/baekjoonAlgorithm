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
  let road_length = input[1].split(' ');
  let total_cost = 0;
  road_length.forEach(element => {
    total_cost += Number(element);
  });

  let target = 0;
  let cost = 0;
  console.log(total_cost);
  while(target <= total_cost) {
     
  }
  process.exit();
});
