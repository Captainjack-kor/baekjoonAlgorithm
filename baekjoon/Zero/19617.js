// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


let num = Math.floor(Math.random() * 1000000000) 
if(num > 2147483647) {
  console.log(2147483647);
} else {
  console.log(num); 
}