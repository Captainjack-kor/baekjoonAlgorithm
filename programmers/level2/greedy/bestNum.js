function solution(number, k) {
  // Number.length - k = 총 선택의 갯수가 된다.
  /*
  왜 탐욕법이지... 정렬이안되는뎅 => 탐욕이 된당 ㅋ
  일단 가장 큰 숫자를 먼저 찾기 "9" 그다음 -> "8" 9와 8사이의 
  indexOf차이가 k 보다 작으면 왼쪽이냐 오른쪽이냐에 따라 문자열을 더해 줌.
  그것이 최선일 가능이 높지 않을까? => 무한 반복 하면 이게 탐욕아닌가?
  */

  let strArr = number.split('');
  var answer = '';
  let choice = number.length - k;
  let result = [];
  const getPermutation = (arr = [], target = "") => {
    // if(arr.length >= 1) {
      for(let i = 0; i < arr.length; i++) {
        const fixed = target + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, choice);
        if(fixed.length === choice) {
          result.push(fixed);
        }
        getPermutation(copyArr, fixed)
      }
    // }
  }

  getPermutation(strArr);
  console.log(result);
  return answer;
}

console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841

