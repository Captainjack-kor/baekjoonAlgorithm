const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  // input.push(line);
  input = line;
  rl.close();
}).on('close', function () {
  input = input.split(' ');
  // console.log(input);
  let hour = 0;
  let work = Number(input[0]);
  let output = Number(input[1]);
  let rest = Number(input[2]);
  let fatigue = Number(input[3]);
  let total = 0;
  let tempFatigue = 0;

  if(work > fatigue) {
    // console.log(0);
  } else {
    while(hour < 24) {
      // if(fatigue - tempFatigue > 0) {
        if(fatigue - (tempFatigue + work) >= 0) {
          total += output;
          tempFatigue += work;
        } else {
          tempFatigue -= rest;
          if(tempFatigue < 0) {
            tempFatigue = 0;
          }
        }
      // } 
      hour++;
    }
  }

  console.log(total);
  process.exit();
});

