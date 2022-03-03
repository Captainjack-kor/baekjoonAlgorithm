const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  // console.log(input);
  let strArr = ["A","B","C","D","E","F","G", "H", 
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // let reverse_strArr = strArr.reverse();

  let move = 0;
  let target = "A";
  let left_distance = 0;
  let right_distance = 0;

  let init = 0;
  
  let init_temp_L = Math.abs('A'.charCodeAt() - input[0].charCodeAt());
  let init_temp_R = 26 - Math.abs('A'.charCodeAt() - input[0].charCodeAt());

  if(init_temp_L < init_temp_R) {
    init = init_temp_L;
  } else {
    init = init_temp_R;
  }

  for(let i = 0; i < input.length - 1; i++) {
    left_distance = Math.abs(input[i + 1].charCodeAt() - input[i].charCodeAt());
    right_distance = 26 -  Math.abs(input[i + 1].charCodeAt() - input[i].charCodeAt())

    if(left_distance < right_distance) {
      move += left_distance;
    } else {
      move += right_distance;
    }
  }
  
  move += init;
  
  console.log(move);
  process.exit();
});
