const { resourceLimits } = require("worker_threads");

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let example = input[0].split(' ').map(v => Number(v));
let card_arr = input[1].split(' ').map(v => Number(v));

let max = example[1];
let temp = 0;
let sum = 0;

let getCombinations = (arr, selectNum) => {
  let results = [];
  if(selectNum === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, index, origin) => {
    let rest = origin.slice(index + 1); 
    let combinations = getCombinations(rest, selectNum - 1);
    let attached = combinations.map((el) => [fixed, ...el]);
    // console.log(...attached);
    results.push(...attached);
  })
  return results;
}

// console.log(getCombinations(card_arr, 3));
getCombinations(card_arr, 3).forEach((el) => {
  let sum = el.reduce((acc, cur) => 
    acc + cur
  )
  if(sum <= max) {
    if(temp < sum) {
      temp = sum;
    }
  }
})

console.log(temp);