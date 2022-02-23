<<<<<<< HEAD
function fibo(num) {
  // 피보나치 수는 F(0) = 0, F(1) = 1일 때, 
  // 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2);
  if(num === 0) {
      return 0;
  }
  
  if(num === 1) {
      return 1;
  }
  
  fibo(num) = fibo(num - 1) + fibo(num - 2);
}

function solution(n) {
  var answer = 0;
  
  answer = fibo(n);
  console.log(answer);
  return answer % 1234567;
}

solution(3); // 2
//solution(5); // 5
=======
function solution(n) {
  let answer = fib_bottom_up(n) % 1234567;
  return answer;
}

function fib_bottom_up(v) {
  let bottom_up = [];
  bottom_up[0] = 0;
  bottom_up[1] = 1;
  bottom_up[2] = 1;
  for (let i = 3; i <= v; i++) {
      bottom_up[i] = (bottom_up[i - 1] % 1234567 + bottom_up[i - 2] % 1234567);
  }
  return bottom_up[v];
}
solution(3);
solution(5);
>>>>>>> 1c38750802380e2a1d5d32f66a625a11033c4aa1
