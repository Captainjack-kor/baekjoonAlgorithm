function solution(sizes) {
  let answer = 0;
  
  let maxX = 0;
  let maxY = 0;
  let newX = 0;
  let newY = 0;

  let result = 0;
  let result2 = 0;

  sizes.forEach(element => {
    if(element[0] >= maxX) {
      maxX = element[0];
    } 
    if(element[1] >= maxY) {
      maxY = element[1];
    }

    result = maxX * maxY;

    if(element[0] >= newY) {
      newY = element[0];
    }

    if(element[1] >= newX) {
      newX = element[1];
    }

    result2 = newX * newY;
  });
  
  console.log(result, result2);
  return answer;
}


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));


