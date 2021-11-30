function solution(priorities, location) {
  var answer = 0;
  const pri = priorities.map((a,i) => [a,i]);
  // console.log(pri);
  const arr = [];

  for(let i = 0; i < pri.length;){
    // console.log(i);
    const temp = pri.shift();
    console.log(temp);
    if(pri.some((a) => temp[0] < a[0])) {
      pri.push(temp);
    } else {
        arr.push(temp);
        if(arr[answer][1] === location) {
          break;
        } else {
          answer ++;
        }
    }
  }
  
  console.log(pri);

  return answer + 1;
}

console.log(solution([2, 1, 3, 2], 2)) // 1 
// console.log(solution([1, 1, 9, 1, 1, 1], 0)) // 5
// console.log(solution([2, 4, 8, 2, 9, 3, 3], 2)) // 2
// console.log(solution([2, 4, 8, 2, 9, 3, 3], 4)) // 1
