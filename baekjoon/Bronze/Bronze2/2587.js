const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let temp = input.map(v => +v);

let sum = temp.reduce((acc, cur) => { return acc + cur }, 0);
// console.log(sum);
let result = [];
result.push(sum / 5);
let tempArr = temp.slice();
tempArr.sort((a, b) => a - b);
result.push(tempArr[tempArr.length / 2]);

console.log(result.join('\n'));