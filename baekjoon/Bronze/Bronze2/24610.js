const [input, ...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let [storage, maxValue] = input.split(' ').map(v => +v);

let temp = arr.map(v => +v);
// console.log(temp);
let answer = [];
// console.log(storage);
// console.log(maxValue);
for(let i = 0; i < temp.length; i++) {
  if(maxValue < temp[i]) {
    temp[i] = maxValue;
  }
  if(storage - temp[i] > 0) {
    storage -= temp[i];
    answer.push(temp[i]);
  } else if(storage - temp[i] < 0){
    // if(storage - temp === 0) 
    answer.push(storage);
    break;
  }
}

console.log(answer.join('\n'));