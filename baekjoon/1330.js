// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// console.log(input);
// solution(input[0], input[1]);

// function solution(A, B) {
//   if(A > B) {
//     console.log(">");
//   } else if(A < B) {
//     console.log("<");
//   } else {
//     console.log("==");
//   }
// }
// console.log(input);

// let result = input.split(" ");
// console.log(result);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  //console.log(line);
  let data = line.split(' ').map((el) => el);
  //console.log(data);
  if(data[0] > data[1]) {
    console.log(">");
  } else if(data[0] < data[1]) {
    console.log("<");
  } else {
    console.log("==");
  }
  rl.close();
}).on('close', function () {
  process.exit();
});

