// 알파벳 갯수 문제

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);
input = input[0];
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// console.log(arr.length);
for(let i = 0; i < input.length; i++) {
  if(input[i] === 'a') {
    arr[0]++;
  } else if(input[i] === 'b') {
    arr[1]++;
  } else if(input[i] === 'c') {
    arr[2]++;
  } else if(input[i] === 'd') {
    arr[3]++;
  } else if(input[i] === 'e') {
    arr[4]++;
  } else if(input[i] === 'f') {
    arr[5]++;
  } else if(input[i] === 'g') {
    arr[6]++;
  } else if(input[i] === 'h') {
    arr[7]++;
  } else if(input[i] === 'i') {
    arr[8]++;
  } else if(input[i] === 'j') {
    arr[9]++;
  } else if(input[i] === 'k') {
    arr[10]++;
  } else if(input[i] === 'l') {
    arr[11]++;
  } else if(input[i] === 'm') {
    arr[12]++;
  } else if(input[i] === 'n') {
    arr[13]++;
  } else if(input[i] === 'o') {
    arr[14]++;
  } else if(input[i] === 'p') {
    arr[15]++;
  } else if(input[i] === 'q') {
    arr[16]++;
  } else if(input[i] === 'r') {
    arr[17]++;
  } else if(input[i] === 's') {
    arr[18]++;
  } else if(input[i] === 't') {
    arr[19]++;
  } else if(input[i] === 'u') {
    arr[20]++;
  } else if(input[i] === 'v') {
    arr[21]++;
  } else if(input[i] === 'w') {
    arr[22]++;
  } else if(input[i] === 'x') {
    arr[23]++;
  } else if(input[i] === 'y') {
    arr[24]++;
  } else if(input[i] === 'z') {
    arr[25]++;
  }
}

// console.log(arr);

let temp = "";
for(let i = 0; i < arr.length; i++) {
  temp += arr[i] + ' ';
}

console.log(temp.trim());