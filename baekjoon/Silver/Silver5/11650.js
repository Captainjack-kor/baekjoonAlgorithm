let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

// input = input.map(v => +v);

let arr = [];

arr = input.map(v => v.split(' ').map(w => +w));

// console.log(arr);
// input.forEach((el) => {
//   arr.push(...el.split(' ').map(v => +v));
// });
// console.log(arr);

// let arrX = [];
// let arrY = [];

let temp = '';
arr.sort((a, b) => {
  if(a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}).forEach(el => {
  temp += `${el[0]} ${el[1]}\n`
})

// console.log(arr);
console.log(temp);

// let result = [];
// for(let i = 0; i < arrX.length; i++) {
//   result.push(arrX[i] + ' ' + arrY[i]);
// }
// // console.log(result);
// let answer = [];
// answer = result.join('\n');
// console.log(answer);