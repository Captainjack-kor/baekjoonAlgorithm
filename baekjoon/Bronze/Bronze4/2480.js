const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let dice = input[0].split(' ').map(v => +v);

// console.log(dice);

dice.sort((a, b) => { return b - a});

// for(let i = 0; i < dice.length; i++) {
  i = 0;
  if(dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i + 1] === dice[i + 2]) {
    console.log(10000 + (dice[0] * 1000));
  } else if(dice[i] === dice[i + 1] || dice[i] === dice[i + 2] || dice[i + 1] === dice[i + 2]) {
    if(dice[i] === dice[i + 1] || dice[i] === dice[i + 2]) {
      console.log(1000 + dice[i] * 100);
    } else {
      console.log(1000 + dice[i + 1] * 100);
    }
  } else {
    console.log(dice[0] * 100);
  }
// }