const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);
let count = 0;

arr.forEach(el => {
  let temp = el.split('');
  // console.log(temp);
  let temp_arr = [];
  let isChecker = true;
  
  while(temp.length > 0) {
    let temp_str = temp.shift();
    if(temp_arr.indexOf(temp_str) === -1) {
      temp_arr.push(temp_str);
      // console.log(temp_arr);
    } else {
      // console.log(temp_str);
      // console.log(temp[0]);
      if(temp_arr.indexOf(temp_str) !== temp_arr.length - 1) {
        isChecker = false;
        break;
      }
    }
  }

  if(isChecker) {
    count++;
  }
})

console.log(count);