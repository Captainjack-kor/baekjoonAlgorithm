const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//123456
//34562
//5624
//246
//64
//4
let temp = [];
for(let i = 1; i <= Number(input); i++) {
  temp.push(i);
}

console.log(temp);

while(temp.length > 1) {
  temp.shift();
  temp.push(temp.shift());
}

console.log(temp[0]);