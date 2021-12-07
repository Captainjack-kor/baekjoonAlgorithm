function solution(number, k) {
  // Number.length - k = 총 선택의 갯수가 된다.
  
  // 왜 탐욕법이지... 정렬이안되는뎅 => 탐욕이 된당 ㅋ
  // 일단 가장 큰 숫자를 먼저 찾기 "9" 그다음 -> "8" 9와 8사이의 indexOf차이가 k 보다 작으면 왼쪽이냐 오른쪽이냐에 따라 문자열을 더해 줌.
  // 그것이 최선일 가능이 높지 않을까? => 무한 반복 하면 이게 탐욕아닌가?
  let greedyArr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  let index = 0; // 가장 큰 값
  
  var answer = '';
  let strArr = number.split('');
  
  if(strArr.indexOf('9') === -1) {
      console.log("없음")
  }
  
  if(strArr.indexOf('7') === -1) {
      console.log("7 없음")
  }
  if(strArr.indexOf('7') !== -1) {
      console.log("7 있음")
  }
  
  
  
  console.log(strArr);
  return answer;
}

/*
number	k	return
"1924"	2	"94"
"1231234"	3	"3234"
"4177252841"	4	"775841"
*/

console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841

