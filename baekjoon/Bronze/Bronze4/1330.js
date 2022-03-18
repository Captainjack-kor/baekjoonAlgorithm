// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// //console.log(input);

// const [A,B] = input;
// //solution(input[0], input[1]);

// if(A > B) {
//   console.log(">");
// } else if(A < B) {
//   console.log("<");
// } else {
//   console.log("==");
// }


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  //console.log(line);
  //let data = line.split(' ').map((el) => el);
  //console.log(data);
  let input = line.split(' ');

  
  let A = Number(input[0]);
  let B = Number(input[1]);

  if(A > B) {
    console.log(">");
  } else if(A < B) {
    console.log("<");
  } else {
    console.log("==");
  }
  rl.close();
}).on('close', function () {
  process.exit();
});

