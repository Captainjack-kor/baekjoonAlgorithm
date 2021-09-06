const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
  //console.log(input);
  rl.close();
}).on('close', function () {
  //45분 빠르게
  let hour = Number(input[0]);
  let min = Number(input[1]);
  let setHour = hour;
  if(hour !== 0) {
    setHour = hour - 1;
  } else if(hour === 0) {
    setHour = 23;
  }
  let setMin = min - 45;
  let setCheckMin = 60 - Math.abs(setMin);
  if(min >= 45) {
    console.log(hour+" "+setMin);
  } else {
    console.log(setHour+" "+setCheckMin);
  }
  process.exit();
});