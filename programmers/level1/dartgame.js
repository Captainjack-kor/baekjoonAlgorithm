function solution(dartResult) {
  var answer = 0;

  let point = 0;
  for(let i = 0; i < dartResult.length; i++) {
    // console.log(typeof(dartResult[i]))
    if((Number(dartResult[i])) <= 10) {
      point = Number(dartResult[i]);
    } else if(dartResult[i] === 'S') {
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
    answer = point;
    point = 0;
  }

  console.log(answer)
  return answer;
}

// console.log(Math.pow(3,2));

solution("1S2D*3T"); // 37 [11 * 2 + 22 * 2 + 33]
solution("1D2S#10S"); // 9 [12 + 21 * (-1) + 101]