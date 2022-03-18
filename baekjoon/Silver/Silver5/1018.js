const [input, ...chess] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.split(' ');
// console.log(N, M);
// console.log(Number(N) === 8);
// console.log(chess);

let arr_type1 = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
]

let arr_type2 = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
]

function compare_type1(y, x) {
  let count = 0;
  for(let i = y; i < y + 8; i++) {
    for(let j = x; j < x + 8; j++) {
      if(chess[i][j] !== arr_type1[i - y][j - x]) {
        count++;
      }
    }
  }
  return count;
}

function compare_type2(y, x) {
  let count = 0;
  for(let i = y; i < y + 8; i++) {
    for(let j = x; j < x + 8; j++) {
      if(chess[i][j] !== arr_type2[i - y][j - x]) {
        count++;
      }
    }
  }
  return count;
}

let result = [];
for(let i = 0; i + 7 < Number(N); i++) {
  for(let j = 0; j + 7 < Number(M); j++) {
    result.push(compare_type1(i, j));
    result.push(compare_type2(i, j));
  }
}

let lowValue = Math.min(...result);
console.log(lowValue);