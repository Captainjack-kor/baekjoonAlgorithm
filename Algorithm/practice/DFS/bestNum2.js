function solution(number, k) {
  let stack = [];
  let temp = [];
  for(let i = 0; i < number.length; i++) {
    if(stack.length !== k) {
      stack.push(number[i]);
    } else {
      // Number(stack.join(''));
    }
  }
  console.log(stack);
  // console.log(temp);
  return stack;
}

solution("1924", 2);