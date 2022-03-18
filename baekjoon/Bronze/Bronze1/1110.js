const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  //input = line;
}).on('close', function () {
  let result = input[0];
  //console.log(result[1]);
  if(result[0] === "0") {
    console.log("1");
  } else {
    let sum = 0;
    let count = 0;

    let final = result;


    let setA = 0;
    let setB = 0;


    //console.log(result);

    while(Number(result) > 0) {
      if(result < 10 && result[0] !== "0") {
        setA = 0;
        setB = Number(result[0]);
      } else {
        setA = Number(result[0]);
        setB = Number(result[1]);
      }
      //console.log(result);
      sum = setA + setB;
      sum = String(sum);
      //console.log(sum);
      //console.log("sum: " + sum);
      if(Number(sum) < 10) {
        result = String(setB) + sum[0];
      } else {
        result = String(setB) + sum[1];
      }
      
      //console.log(result);
      
      count++;

      if(result[0] === "0") {
        result = result.slice(1,2);
      }
      if(final === result) {
        result = -1;
      }
    }

    console.log(count);
  }

  process.exit();
});