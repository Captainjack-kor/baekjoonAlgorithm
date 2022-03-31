const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(' ');
let element = input[1].split(' ').map(v => +v).sort((a, b) => b - a);

// console.log(N);
// console.log(element);

let answer = [];
let standard = "";
let temp = "";
let result = "";
let reset = false;
for(let i = 0; i < +K; i++) {
  let count = 0;
  standard += N[i];
  for(let j = 0; j < element.length; j++) {
    if(result !== "") {
      temp = result;
    }

    if(reset) {
      reset = false;
      temp += element[j + 1];
    } else {
      if(temp.length < +K) {
        temp += element[j];
      }
    }

    console.log("temp: " + temp);

    if(Number(standard) < Number(temp)) {
      count++;
      temp = "";
    } else {
      count = 0;
      result = temp;
      temp = "";
    }
    console.log("count: " + count);

    // console.log(temp);
    console.log("standard: " + standard);
    if(count === +K) {
      reset = true;
      i = 0;
    }
  } 
}

console.log(result);


// 3333 3
// 1 2 3
// ------
// 3333 (답);

// 4111 3
// 4 8 9
// 999 (정답)
// 4099 (오답)

// 510 3
// 1 5 7
// 정답: 177
// 출력: 77