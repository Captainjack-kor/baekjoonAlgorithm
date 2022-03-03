const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let time = input[0].split(' ').map(v => +v);
let target = +input[1];


let hour = time[0];
let min = time[1];

min = min + target;
while(min > 59) {
  min -= 60;
  hour++;
  if(hour > 23) {
    hour = 0;
  }

  // if(min > 59 || min < 0) {
  //   min = 0;
  // }
}

min = Math.abs(min);

console.log(`${hour} ${min}`)

