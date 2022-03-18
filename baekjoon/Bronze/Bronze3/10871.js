const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
// let N = 0;
// let X = 0;

// const [index, ...rest] = input;

// for (let i = 0; i < index; i++) {
//     let [a, b] = rest[i].toString().split(' ').map(Number);
//     console.log(a+b);
// }

rl.on('line', function (line) {
  // let input = line.split(' ');

  // N = Number(input[0]);
  // X = Number(input[1]);

  input.push(...line.split(' '));
  // let [N, X, ...rest] = inputData;
  // console.log(N + ""+X +"" +rest)
  // console.log(inputData)

  //rl.close();


  //console.log(inputData.length);
  
  
}).on('close', function () {
  let [N, X, ...rest] = input; 
  //console.log(N);
  //console.log(X);
  //console.log(rest);

  let result = rest.filter((e) => Number(e) < X);

  console.log(...result);

  process.exit();
});
