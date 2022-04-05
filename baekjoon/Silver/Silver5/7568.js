const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);
// let user_info = arr.split(' ').map(v => +v);
let result = [];
let user_info = arr.map(data => data.split(' ').map(v => +v));
for(let i = 0; i < input; i++) {
  // console.log(user_info);
  let count = 1;
  for(let j = 0; j < input; j++) {
    if(user_info[i][0] < user_info[j][0] && user_info[i][1] < user_info[j][1] ) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join(' '));
