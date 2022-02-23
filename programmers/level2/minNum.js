function solution(A,B){
  var answer = 0;
  
  A.sort((a,b) => { return a - b });
  B.sort((a,b) => { return b - a });
  
  console.log(A);
  console.log(B);
  let sum = 0;
  while(A.length > 0) {
    sum += A.pop() * B.pop();
  }
  console.log(sum);
  return answer;
}

solution([1,4,2], [5,4,4]); // 29
solution([1,2], [3,4]); // 10