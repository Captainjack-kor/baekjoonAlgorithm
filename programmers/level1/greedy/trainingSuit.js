function solution(n, lost, reserve) {
  //* 총 학생수 n, 도난 lost, 여벌 Reserve
  var answer = n;

  // lost.sort((a, b) => a - b);
  // reserve.sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = reserve.length - 1; 
  let count = 0;
  //* let rightIdx = n; 

  let newArr = [];
  let newLost = [];
  for(let j = 0; j < reserve.length; j++) {
    // console.log("🚀 lost[j]", lost[j]);
    if(lost.indexOf(reserve[j]) === -1) {
      newArr.push(reserve[j]);
      // lost.splice(reserve.indexOf(lost[j]), 1);
      // reserve.splice(reserve.indexOf(lost[j]), 1);
    }
  }

  for(let j = 0; j < lost.length; j++) {
    if(reserve.indexOf(lost[j]) === -1) {
      newLost.push(lost[j]);
    }
  }

  reserve = newArr;
  lost = newLost;
  // console.log(newArr);
  // console.log(newLost);

  for(let i = 0; i < reserve.length; i++) {
    // if(lost.indexOf(reserve[i]) !== -1) {
    //   lost.splice(lost.indexOf(reserve[i]), 1);
    // }

    if(lost.indexOf(reserve[i] - 1) !== -1) {
      lost.splice(lost.indexOf(reserve[i] - 1), 1);
    }
    else if(lost.indexOf(reserve[i] + 1) !== -1) {
      lost.splice(lost.indexOf(reserve[i] + 1), 1);
    }

    

  }
  // console.log("🚀 reserve", reserve);
  // console.log("🚀 lost", lost);
  return n - lost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(4, [2, 4], [1, 3])); // 4
console.log(solution(4, [2, 4], [3, 1])); // 3 
console.log(solution(5, [2, 3, 4], [3, 4, 5])); // 4
console.log(solution(5, [3, 4], [4, 5])); // 4
console.log(solution(5, [2, 3, 4], [1, 2, 3])); // 4

// 입력값 5, [2,3,4] ,[1,2,3] 넣어보시면 될듯합니다.

/*
*n	lost	reserve	return
*5	[2, 4]	[1, 3, 5]	5
*5	[2, 4]	[3]	4
*3	[3]	[1]	2
*/

//* 4, [2, 4], [1, 3] => 1 이 뒷번호 2에 빌려주고, 3이 뒷번호 4에 빌려주므로 4명 (O)
//* 4, [2, 4], [3, 1] => 3 이 앞번호 2에 빌려주고, 1은 뒷번호 2가 이미 있으므로 3명 (X)
