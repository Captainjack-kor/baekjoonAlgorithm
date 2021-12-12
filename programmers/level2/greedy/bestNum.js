function solution(number, k) {
  // Number.length - k = 총 선택의 갯수가 된다.
  
  // 일단 가장 큰 숫자를 먼저 찾기 "9" 그다음 -> "8" 9와 8사이의 
  // indexOf차이가 k 보다 작으면 왼쪽이냐 오른쪽이냐에 따라 문자열을 더해 줌.
  // 그것이 최선일 가능이 높지 않을까? => 무한 반복 하면 이게 탐욕아닌가?
  // let greedyArr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  let index = 0; // 가장 큰 값
  let result = [];
  var answer = '';
  for(let i = 0; i < number.length; i++) {
    let prev = number[i];
    let next = number[i + 1];
    if(prev > next) {
      result.push(prev);
      k--;
    } else {
      result.push(next);
      k--;
    }
    // while() {

    // }
  }
  return answer;
}

console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841

