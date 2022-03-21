let [trash1, arr1, trash2, arr2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr2.length);
// let temp = Array.from({ length: trash2 }, () => 0);
let temp = [];
// console.log(temp);

let arr = arr1.split(' ').map(v => +v);
let targetArr = arr2.split(' ').map(v => +v);

// console.log(arr);

let setMap = new Map();
for(let i = 0; i < arr.length; i++) {
  if(setMap.has(arr[i])) {
    setMap.set(arr[i], setMap.get(arr[i]) + 1)
  } else {
    setMap.set(arr[i], 1);
  }
}

console.log(setMap);

targetArr.forEach((el) => {
  if(setMap.get(el)) {
    temp.push(setMap.get(el));
  } else {
    temp.push(0);
  }
})

console.log(temp.join(' '));

// console.log(targetArr);

//m_arr.forEach(v => answer.push(myMap.get(v)||0));