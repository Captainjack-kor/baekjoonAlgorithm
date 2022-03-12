const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(arr);

let answer = [];

arr.forEach((el) => {
  let stack = [];
  let temp = "YES"
  // el = el.split('');
  for(let i = 0; i < el.length; i++) {
    if(el[i] === '(') {
      stack.push("(");
    } else {
      if(stack.pop() !== "(") {
        temp = "NO";
        break;
      }
    }
  }

  if(stack.length !== 0) {
    temp = "NO";
  } 
  

  answer.push(temp);

});

console.log(answer.join('\n'));
