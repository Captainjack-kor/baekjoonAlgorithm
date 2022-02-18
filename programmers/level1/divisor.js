function divisor(num) {
  // for(let i = 1; i <= Math.floor(num / 2); i++) {
  let evenCheck = 0;
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
      evenCheck++;
    }
  }

  if(evenCheck % 2 === 0) {
    console.log("짝수");
    return true;
  } else {
    console.log("홀수");
    return false;
  }
}

function solution(left, right) {
  var answer = 0;
  
  for(let i = left; i <= right; i++) {
    if(divisor(i)) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  console.log(answer);

  return answer;
}

solution(13, 17); // 43
solution(24, 27); // 52

