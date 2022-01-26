const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  // 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
  // console.log(input);
  //18 -> 4
  let input2 = input;
  // 5 * 3 + 1 * 1 
  let count = 0;
  let count2 = 0;
  while(input > 0) {
    if(input < 5) {
      if(input >= 3) {
        input -= 3;
        count++;
      } else {
        break;
      }
      break;
    }
    input -= 5;
    count++;
  }

  while(input2 > 0) {
    if(input2 < 3) {
      break;
    }
    input2 -= 3;
    count2++;
  }
  console.log(input2);

  // console.log(input);
  if(input !== 0) {
    console.log(-1);
  } else if(input < 0 && count2 > 0){
    console.log(count2);
  } else {
    console.log(count);
  }


  process.exit();
});

