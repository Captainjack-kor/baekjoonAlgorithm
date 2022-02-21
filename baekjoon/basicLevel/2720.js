// 세탁소 사장 동혁
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";
let arr = [];
rl.on('line', function (line) {
  if(arr.length === arr[0]) {
    arr.shift();
    input = arr;
    arr.push(Number(line));
    rl.close();
  } 

  arr.push(Number(line));

}).on('close', function () {
  console.log(input);
  /*
  거스름돈의 액수가 주어지면 리암이 줘야할 
  *쿼터(Quarter, $0.25)의 개수, 
  *다임(Dime, $0.10)의 개수, 
  *니켈(Nickel, $0.05)의 개수, 
  *페니(Penny, $0.01)의 개수를 
  구하는 프로그램을 작성하시오. 
  거스름돈은 항상 $5.00 이하이고, 손님이 받는 동전의 개수를 최소로 하려고 한다. 
  예를 들어, $1.24를 거슬러 주어야 한다면, 손님은 4쿼터, 2다임, 0니켈, 4페니를 받게 된다.
  */
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;

  for(let i = 0; i < input.length; i++) {
    // input[i] = input[i] / 100;
    while(input[i] >= 0) {
      if(input[i] - 25 >= 0) {
          input[i] -= 25;
          quarter++;
      } 
      else {
        break;
      }
    }

    while(input[i] >= 0) {
      if(input[i] - 10 >= 0) {
          input[i] -= 10;
          dime++;
      } 
      else {
        break;
      }
    }

    while(input[i] >= 0) {
      if(input[i] - 5 >= 0) {
          input[i] -= 5;
          nickel++;
      } 
      else {
        break;
      }
    }

    while(input[i] >= 0) {
      if(input[i] - 1 >= 0) {
          input[i] -= 1;
          console.log(input[i])
          penny++;
      } 
      else {
        break;
      }
    }

    console.log(quarter, dime, nickel, penny);
    quarter = 0;
    dime = 0;
    nickel = 0;
    penny = 0;
  }


  process.exit();
});