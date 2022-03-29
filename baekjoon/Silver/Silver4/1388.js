const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let [W, H] = n.split(' ').map(v => +v);
let line_list = arr.map(v => v.split(''))

// console.log(line_list);
let answer = 0;

for (let i = 0; i < W; i++) {
  let horizon_checker = true;
  for (let j = 0; j < H; j++) {
    if (horizon_checker == true && line_list[i][j] == '-') {
      answer++;
      horizon_checker = false;
    } else if (line_list[i][j] == '|') {
      horizon_checker = true;
    }
  }
}
for (let i = 0; i < H; i++) {
  let vertical_checker = true;
  for (let j = 0; j < W; j++) {
    if (vertical_checker == true && line_list[j][i] == '|') {
      answer++;
      vertical_checker = false;
    } else if (line_list[j][i] == '-') {
      vertical_checker = true;
    }
  }
}

console.log(answer);