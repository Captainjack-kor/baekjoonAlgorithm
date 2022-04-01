const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//길이제한 5막은게 신의한수넹 ㅋㅋㅋ split으로 못 쪼갤 듯..
let arr = input;

arr = arr.split('-');
console.log(arr);
console.log(arr[1].split('+'));

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === "-") {

  } 
}
