function solution(number, k) {
  var stack = [];
  for (var i = 0; i < number.length; i++) {
    var currentNum = number[i];
    while (k > 0 && 
      // stack.length > 0 && 
      stack[stack.length - 1] < currentNum) {
      stack.pop();
      k--;
    }
    stack.push(currentNum);
    console.log(stack);
  }

  stack.splice(stack.length - k, k);
  console.log(stack.join(''))
  return stack.join('');
}

// solution("1234", 2); // 34
// solution("1924", 2); // 94
// solution("1231234", 3); // 3234
solution("4177252841", 4); // 775841
