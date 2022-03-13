const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const [n,m] = input.shift().split(' ').map(e => +e); 
const arr = Array.from(Array(m + 1).keys());
for(let i = 2; i <= Math.sqrt(m); i++) { 
  if(arr[i]) { 
   for(let j = i * i; j <= m; j += i) {
     arr[j] = false; 
   }
  }
} 

arr.splice(0, 2, false, false) 
for(let i = n; i<=m; i++){ 
  if(arr[i]) {
    console.log(arr[i]);
  }
}


// function isPrime(num) {
//   if(num === 1) {
//     return false;
//   }

//   if(num === 2) {
//     return true;
//   }

//   for(let i = 2; i <= Math.floor(num / 2); i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // let test = input[0].split(' ')
// // console.log(test);
// let m = Number(input[0].split(' ')[0]);
// let n = Number(input[0].split(' ')[1]);
// let result = [];
// // console.log(m);
// for(let i = m; i < n; i++) {
//   if(isPrime(i)) {
//     result.push(i);
//   }
// }

// console.log(result.join('\n'));
