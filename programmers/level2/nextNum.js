function solution(n) {
  var answer = n;
  answer = answer.toString(2);
  let count = 0;
  for(let i of answer) {
    if(i === '1') {
      count++;
    }
  }
  console.log(count);
  let target = 0;
  while(count >= target) {
    n++;
    answer = n;
    answer = answer.toString(2);
    for(let i of answer) {
      if(i === '1') {
        target++;
      }
    }
    if(count === target) {
      break;
    }
    target = 0;
  }
  console.log(n);
  return n;
}

solution(78);
solution(15);