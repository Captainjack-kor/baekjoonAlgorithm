function solution(priorities, location) {
  var answer = 0;
  let indexArr = priorities.map((el, index) => [el, index]);
  let index = location;
  let max = Math.max(...priorities);
  let count = 0;
  let resultValue = indexArr[location];
  console.log(resultValue);

  console.log(indexArr);

  while(indexArr.length > 0) {
    
    indexArr.shift();

  }
  
  // for(let i = 0; i < indexArr.length; i++) {
  //     if(indexArr[i][0] === max) {
  //         let queue = indexArr.shift();
  //         indexArr.push(queue);
  //         count++;
  //         break;
  //     } else {
  //         let queue = indexArr.shift();
  //         indexArr.push(queue);
  //     }
  // }
  
  // for(let i = 0; i < indexArr.length; i++) {
  //     if(indexArr[i][0] === resultValue[0] && indexArr[i][1] === resultValue[1]) {
  //         break;
  //     } else {
  //         answer++;
  //     }
  // }
  // console.log("index: " + index);
  // console.log(indexArr);
  return answer + 1;
}

console.log(solution([2, 1, 3, 2], 2)) // 1 
// console.log(solution([1, 1, 9, 1, 1, 1], 0)) // 5
// console.log(solution([2, 4, 8, 2, 9, 3, 3], 2)) // 2
// console.log(solution([2, 4, 8, 2, 9, 3, 3], 4)) // 1
