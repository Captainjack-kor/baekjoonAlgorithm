const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[0].split(' ').map(v => +v);

// console.log(arr);

let ground = 0;
let goal = arr[2];
let up = arr[0];
let down = arr[1];
let day = 0;

// while(ground < goal) {
//   day++;
//   ground += up;
//   if(ground < goal) {
//     ground -= down;
//   } else {
//     break;
//   }
// }

day = Math.ceil((goal - down) / (up - down));

console.log(day);