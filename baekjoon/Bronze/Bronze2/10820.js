const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const t = input.filter(str => str.length < 1)

if (t.length) {
  input.splice(input.indexOf(t[0]), 1)
}

input.forEach(str => {
  const lower = str.length - str.replace(/[a-z]/g, '').length
  const upper = str.length - str.replace(/[A-Z]/g, '').length
  const num = str.length - str.replace(/[0-9]/g, '').length
  const blank = str.length - str.replace(/\ /g, '').length

  console.log(lower, upper, num, blank)
})

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// const t = input.filter(str => str.length < 1)

// if (t.length) {
//   input.splice(input.indexOf(t[0]), 1)
// }

// console.log(input);

// input.forEach((el) => {
//   // el = String(el);
//   let lowerCase = 0;
//   let upperCase = 0;
//   let number = 0;
//   let whiteSpace = 0;
//   // console.log(el);
//   for(let i = 0; i < el.length; i++) {
//     if(el[i].charCodeAt() >= 97 && el[i].charCodeAt() <= 122) {
//       lowerCase++;
//     } else if(el[i].charCodeAt() >= 65 && el[i].charCodeAt() <= 90) {
//       upperCase++;
//     } else if(el[i] !== ' ' && Number(el[i]) >= 0 && Number(el[i]) <= 9) {
//       number++;
//     } else if(el[i] === ' '){
//       whiteSpace++;
//     }
//   }

//   console.log(`${lowerCase} ${upperCase} ${number} ${whiteSpace}`);
// });
