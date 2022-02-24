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
  let reverse_strArr = strArr.reverse();
  // console.log(reverse_strArr);
  // 왼쪽, 오른쪽 두 경우만 고려 (조이스틱의 순한 맛)
  let result_count = 0;
  let target = "A";
  for(let i = 0; i < input.length; i++) {
    let temp_target_L = "";
    let temp_target_R = "";
    let left_count = 0;
    let right_count = 0;
    // 출발 if(input[i].indexOf)
    // 상시

    // console.log(input[i - 1]);

    // if(input[i - 1] === undefined) {
    //   input[i - 1] = "A";
    // }
    // console.log(input[i - 1]);
    console.log("TARGET: " + target);
    for(let j = strArr.indexOf(target); j < strArr.length; j++) {
      right_count++;
      console.log("오른쪽으로 : " + strArr[j]);
      if(strArr[j] === input[i]) {
        temp_target_R = strArr[j];
        console.log(temp_target_R + "RRR");
        console.log("str: " + strArr[j] +' '+right_count);
        break;
      }
    }

    for(let z = reverse_strArr.indexOf(target); z < reverse_strArr.length; z++) {
      left_count++;
      console.log("왼쪽으로 : " + reverse_strArr[z]);
      if(reverse_strArr[z] === input[i]) {
        temp_target_L = reverse_strArr[z];
        console.log(temp_target_L + "LLL");
        console.log("reverse: " + reverse_strArr[z] +' '+ left_count);
        break;
      }
    }
    if(left_count > right_count) {
      result_count += right_count;
      target = temp_target_R;
    } else {
      result_count += left_count;
      target = temp_target_L;
    }
  }
  console.log(result_count);
  process.exit();
});
