const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);

let status = input[0].split(' ').map(el => Number(el));
// console.log(status);

let init = Array(status[0] + 1).fill(false);

// console.log(init);

let point = 0;
let ability = status[1];
let limit = status[2];

input.shift();
for(let i = 0; i < status[0]; i++) {
  if(ability >= Number(input[i].split(' ')[1]) && !init[i] && limit > 0) {
    point += 140;
    init[i] = true;
    limit--;
  } 
}

for(let i = 0; i < status[0]; i++) {
  if(ability >= Number(input[i].split(' ')[0]) && !init[i] && limit > 0) {
    point += 100;
    init[i] = true;
    limit--;
  } 
}

// console.log("limit: " + limit);

// console.log(init);

// console.log("point: " + point);

console.log(point);