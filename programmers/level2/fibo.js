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

//123