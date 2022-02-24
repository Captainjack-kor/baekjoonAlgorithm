const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  // console.log(input);
  let arr = input[1].split(' ');
  console.log(arr);
  // 펭귄 서있는 곳 위치 좌, 우 하나씩 가면서 최솟 값 찾기

  let min_left =  1000000000;
  let min_right =  1000000000;

  //좌로
  for(let i = arr.indexOf("-1") - 1; i >= 0; i--) {
    //  console.log("좌: " + arr[i]);
     if(min_left > Number(arr[i])) {
       min_left = Number(arr[i]);
     }
  }

  //우로
  for(let i = arr.indexOf("-1") + 1; i < arr.length; i++) {
    // console.log("우: " + arr[i]);
    if(min_right > Number(arr[i])) {
      min_right = Number(arr[i]);
    }
    console.log(min_right);
 }

  console.log(min_left + min_right);
  process.exit();
});

