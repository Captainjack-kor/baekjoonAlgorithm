const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num = +input[0];

if(num % 2 === 1) {
  console.log("SK");
} else {
  console.log("CY");
}