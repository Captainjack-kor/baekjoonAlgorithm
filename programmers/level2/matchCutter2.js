function solution(s) {
  const stack = [];
  // console.log(stack);
    for(let i = 0 ; i < s.length ; i++ ){
      if(!stack.length || stack[stack.length - 1] !== s[i]) {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
      console.log(stack);
  }

  return stack.length ? 0 : 1;
}

//! reference
// function solution(s) {
//   const stack = [];
//     for(let i = 0 ; i < s.length ; i++ ){
//       if(!stack.length || stack[stack.length - 1] !== s[i]) {
//         stack.push(s[i]);
//       } else {
//         stack.pop();
//       }
//       console.log(stack);
//   }

//   return stack.length ? 0 : 1;
// }

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
