function solution(number, k) {
  let stack = [];
  let answer = [];
  //* [19, 12, 14, 92, 94, 24];

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    let temp = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기

      // const tempA = attached.join('');
      // console.log("hi???" + tempA);
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });
    return results; // 결과 담긴 results return
  }

  let value = getCombinations(number.split(''), number.length - k);

  let max = 0;
  for(let i = 0; i < value.length; i++) {
    if(max < Number(value[i].join(''))) {
      max = Number(value[i].join(''));
    }
  }
  console.log(String(max));
  return max;
}

console.log("===== 1차 답안 =====");
solution("1924", 2);
solution("1231234", 3);
console.log("====================");


// function solution(number, k) {
//   // Number.length - k = 총 선택의 갯수가 된다.
  
//   // 왜 탐욕법이지... 정렬이안되는뎅 => 탐욕이 된당 ㅋ
//   // 일단 가장 큰 숫자를 먼저 찾기 "9" 그다음 -> "8" 9와 8사이의 
//   // indexOf차이가 k 보다 작으면 왼쪽이냐 오른쪽이냐에 따라 문자열을 더해 줌.
//   // 그것이 최선일 가능이 높지 않을까? => 무한 반복 하면 이게 탐욕아닌가?
//   let greedyArr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
//   let index = 0; // 가장 큰 값
  
//   var answer = '';
//   let strArr = number.split('');
  
//   while(index === greedyArr.length)
//   if(strArr.indexOf(greddyArr[index] === -1)){
//       index++;
//   }
//   if(strArr.indexOf('9') === -1) {
//       console.log("없음")
//   }
  
//   if(strArr.indexOf('7') === -1) {
//       console.log("7 없음")
//   }
//   if(strArr.indexOf('7') !== -1) {
//       console.log("7 있음")
//   }
  
  
  
//   console.log(strArr);
//   return answer;
// }