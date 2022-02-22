const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(Number(input[0]) === input.length - 1){
    rl.close();
  }
}).on('close', function () {
  input.shift();
  
  //console.log(input);

  let newArr = [];
  let student = 0;
  let avg = 0;
  let sum = 0;

  for(let i = 0; i < input.length; i++) {

    newArr = input[i].split(' ');
    student = newArr.shift();

    //console.log(newArr);

    for(let j = 0; j < newArr.length; j++) {
      sum = sum + Number(newArr[j]);
    }

    avg = sum / student;
    let count = 0;

    // console.log("newArr: "+newArr);
    // console.log(sum);
    //console.log("평균: " + avg);
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] > avg) {
        count++;
      }
    }
    
    console.log((count / student * 100).toFixed(3) + "%");

    student = 0;
    newArr = [];
    count = 0;
    avg = 0;
    sum = 0;
  }

  process.exit();

});
