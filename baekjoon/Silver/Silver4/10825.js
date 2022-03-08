let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let arr = [];

arr = input.map(v => v.split(' ').map(w => Number(w) || w)); // 문자열 숫자반환시 null 방지

let temp = '';
arr.sort((a, b) => {
  if(a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    if(a[0] > b[0]) return 1
    else if(a[0] < b[0]) return -1
    else return 0
  } else { 
    if(a[1] === b[1] && a[2] === b[2])  {
      return Number(b[3]) - Number(a[3]);
    } else if(a[1] === b[1]) {
      return Number(a[2]) - Number(b[2]);
    } else {
      return Number(b[1]) - Number(a[1]);
    }
  }
}).forEach(el => {
  temp += `${el[0]}\n`
})

console.log(temp.trim());