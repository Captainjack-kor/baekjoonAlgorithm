const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();
let set = input.map(v => +v);
set = set.slice(1);
let temp = set.slice();
temp.sort((a, b) => { return a - b });

let average = Math.round(set.reduce((acc, cur) => acc + cur) / set.length);
let centerValue = temp[Math.floor(temp.length / 2)];
let frequently_Value = frequently(temp);
let range = temp[temp.length - 1] - temp[0];

function frequently(arr) {
  // console.log(arr);
  let map = {};
  // let keys_arr = Object.keys(map).indexOf(String(arr));
  for(let i = 0; i < arr.length; i++) {
    if(Object.keys(map).indexOf(String(arr[i])) !== -1) {
      map[arr[i]]++; 
    } else {
      map[arr[i]] = 1;
    }
  }

  let result = [];

  // console.log(map);
  let temp = Object.values(map).slice();
  let max = Math.max(...temp);
  // console.log("max:" +max);
  for(let i = 0; i < Object.values(map).length; i++) {
    if(Number(temp[i]) === max) {
      result.push(Number(Object.keys(map)[i]));
    }
  }
  // console.log(result);
  result.sort((a, b) => { return a - b })
  return result.length > 1 ? result[1] : result[0];
}

if(average === -0) {
  console.log(0)
} else {
  console.log(average);
}
console.log(centerValue);
console.log(frequently_Value);
console.log(range);