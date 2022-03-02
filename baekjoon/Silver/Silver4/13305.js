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
  // console.log(input);
  let road_length = input[1].split(' ').map(el => BigInt(el));
  let gas_station = input[2].split(' ').map(el => BigInt(el));
  // let total_cost = 0;
  let cost = BigInt("0");
  // road_length.map((el) => total_cost += el);

  // console.log(total_cost);

  let cur = gas_station[0];

  for(let i = 0; i < Number(input[0]) - 1; i++) {
    cost += cur * road_length[i];
    if(cur > gas_station[i + 1]) {
      cur = gas_station[i + 1];
    }
  }

  console.log(String(cost));

  process.exit();
});
