const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(' ').map(v => +v);

// let set = Array.from(new Set([...arr])).sort((a, b) => a - b);
let set = new Set(arr);
let newArr = Array.from(set); //let newArr = [...set];
let temp = newArr.slice();
let sortedArr = temp.sort((a, b) => a - b);
// console.log(sortedArr);

let tempObj = {};

let answer = [];
sortedArr.forEach((el, idx) => {
  tempObj[el] = idx;
});

for(let i = 0; i < arr.length; i++) {
  answer.push(tempObj[arr[i]])
}

// console.log(tempObj);

console.log(answer.join(' '));
