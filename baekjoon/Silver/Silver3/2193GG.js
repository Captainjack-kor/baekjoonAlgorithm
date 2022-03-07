const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let target_length = Number(input[0]);

// 1 => 1 
let result = [];
let binary_length = 0;
let count = 0;
while(true) {
  // console.log(binary_length.toString(2));
  let target = binary_length.toString(2);
  binary_length++;
  if(target_length === binary_length.toString(2).length) {
    count++;
    for(let i = 0; i < target.length; i++) {
      if(target[i] === '1' && target[i + 1] === '1' 
      && target_length === binary_length.toString(2).length) {
        count--;
        break;
      }
    }
  } else if(target_length < binary_length.toString(2).length) {
    result.push(count);
    count = 0;
    break;
  }
}

console.log(result[0]);