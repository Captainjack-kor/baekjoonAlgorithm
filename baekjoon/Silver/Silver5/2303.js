const [input, ...arr]= require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);
let temp = arr.map(v => v.split(' ').map(v => +v));
// console.log(temp);
let sum = 0;
let max = 0;
let maxList = [];
temp.forEach((el) => {
  for(let i = 0; i < el.length; i++) {
    for(let j = i + 1; j < el.length; j++) {
      for(let z = j + 1; z < el.length; z++) {
        sum = String(el[i] + el[j] + el[z]).length === 2 ? Number(String(el[i] + el[j] + el[z])[1]) : Number(String(el[i] + el[j] + el[z])[0]);
        if(max < sum) {
          max = sum;
        }
        sum = 0;
      }
    }
  }
  if(maxList.indexOf(max) !== -1) {
    if(el)
    maxList.push(0);
  } else {
    maxList.push(max);
  }

  max = 0;
})

// console.log(maxList);
let max_value = 0;
let index = 0;

for(let i = 0; i < maxList.length; i++) {
  if(max_value < maxList[i]) {
    max_value = maxList[i];
    index = i;
  }
  if(max_value === maxList[i]) {

    // [9, 3[1], 8, 3[3]]
    if(i > index) {
      index = i;
    }
  }
}

// let find_winner = Math.max(...maxList);
// console.log(maxList.indexOf(find_winner) + 1);

console.log(index + 1);