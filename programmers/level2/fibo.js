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
