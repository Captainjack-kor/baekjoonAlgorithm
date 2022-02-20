function solution(dartResult) {
  var answer = 0;

  let point = 0;
  for(let i = 0; i < dartResult.length; i++) {
    // console.log(typeof(dartResult[i]))
    if((Number(dartResult[i])) <= 10) {
      point = 0;
      point = Number(dartResult[i]);
    } 
    
    if(dartResult[i] === 'S') {
      point = Math.pow(point, 1);
    } else if(dartResult[i] === 'D') {
      point = Math.pow(point, 2);
    } else if(dartResult[i] === 'D') {
      point = Math.pow(point, 3);
    } else if(dartResult[i] === '*') {
      point *= 2;
    } else if(dartResult[i] === '#') {
      point = -point;
    }
    answer += point;
    console.log(answer)
  }

  console.log(answer)
  return answer;
}

// console.log(Math.pow(3,2));
solution("1S2D*3T"); // 37 [1^1 * 2 + 2^2 * 2 + 3^3]
// solution("1D2S#10S"); // 9 [1^2 + 2^1 * (-1) + 10^1]