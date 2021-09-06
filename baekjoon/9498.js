// 시험 점수를 입력받아 90 ~ 100점은 A, 
// 80 ~ 89점은 B, 
// 70 ~ 79점은 C, 
// 60 ~ 69점은 D, 
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 1) {
    rl.close();
  }
}).on('close', function () {
  let A = Number(input[0]);

  if(100 >= A && A >= 90) {
    console.log("A");
  } else if(89 >= A && A >= 80 ) {
    console.log("B");
  } else if(79 >= A && A >= 70) {
    console.log("C");
  } else if(69 >= A && A >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  process.exit();
});