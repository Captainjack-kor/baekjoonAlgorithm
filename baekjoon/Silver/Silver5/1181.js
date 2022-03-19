const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let temp = arr.map(v => v.length);
// console.log(temp)
let max = Math.max(...temp);
let min = Math.min(...temp);
// console.log(max, min);

let result = [];
for(let i = min; i <= max; i++) {
  let tempArr = [];
  for(let j = 0; j < input; j++) {
    if(arr[j].length === i) {
      if(tempArr.indexOf(arr[j]) === -1) {
        tempArr.push(arr[j]);
      }
    }
  }
  if(tempArr.length > 1) {
    result.push(...tempArr.sort());
  } else {
    result.push(...tempArr);
  }
}

console.log(result.join('\n'));

/*
const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// console.log(arr);
arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
let temp = new Set(arr);
console.log(Array.from(temp).join('\n'));
*/

