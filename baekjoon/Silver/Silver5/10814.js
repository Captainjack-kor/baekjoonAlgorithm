let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let arr = [];

arr = input.map(v => v.split(' ').map(w => w));

let temp = '';
arr.sort((a, b) => {
  // if(a[0] === b[0]) {
    return Number(a[0]) - Number(b[0]);
  // } 
}).forEach(el => {
  temp += `${el[0]} ${el[1]}\n`
})

console.log(temp);