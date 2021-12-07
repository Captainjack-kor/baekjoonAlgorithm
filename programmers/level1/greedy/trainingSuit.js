function solution(n, lost, reserve) {
  //* 총 학생수 n, 도난 lost, 여벌 Reserve
  var answer = n;
  //* 항상 최선을 먼저 골라 5명 다 입을 수 있는가? 이걸 판단하려면 학생수 만큼 부터 출발해서 -1씩 감소하게

  //여벌 있는 사람이 도난 당하면 다른 사람에게 못 준다. 이거 먼저 판단한다면? 
  // for(let i = 0; i < n; i++) { // 학생 수 만큼 일단 배열 반복.
  //   if()
  // }
  // for(let i = 0; i < lost.length; i++) {
  //   if(reserve.indexOf(lost[i]) !== -1) {
  //     reserve.splice(reserve.indexOf(lost[i]), 1);
  //   }
  // }

  console.log(reserve);
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  


  let leftIdx = 0;
  let rightIdx = n;

  while(leftIdx < rightIdx) {
    // 0부터 출발 
    leftIdx++;
    // 끝에서 5부터 감소
    rightIdx--;
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2

/*
*n	lost	reserve	return
*5	[2, 4]	[1, 3, 5]	5
*5	[2, 4]	[3]	4
*3	[3]	[1]	2
*/