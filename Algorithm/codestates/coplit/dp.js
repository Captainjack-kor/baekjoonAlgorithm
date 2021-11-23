/*
금고를 털어라
문제
자신이 감옥에 간 사이 연인이었던 줄리아를 앤디에게 빼앗겨 화가 난 조지는 브레드, 맷과 함께 앤디 소유의 카지노 지하에 있는 금고를 털기로 합니다. 온갖 트랩을 뚫고 드디어 금고에 진입한 조지와 일행들. 조지는 이와중에 감옥에서 틈틈이 공부한 알고리즘을 이용해 target 금액을 훔칠 수 있는 방법의 경우의 수를 계산하기 시작합니다.

예를 들어 $50 을 훔칠 때 $10, $20, $50 이 있다면 다음과 같이 4 가지 방법으로 $50을 훔칠 수 있습니다.

$50 한 장을 훔친다
$20 두 장, $10 한 장을 훔친다
$20 한 장, $10 세 장을 훔친다
$10 다섯 장을 훔친다
훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type 을 입력받아, 조지가 target 을 훔칠 수 있는 방법의 수를 리턴하세요.

입력
인자 1: target
Number 타입의 100,000 이하의 자연수
인자 2: type
Number 타입을 요소로 갖는 100 이하의 자연수를 담은 배열
출력
Number 타입을 리턴해야 합니다.
조지가 target을 훔칠 수 있는 방법의 수를 숫자로 반환합니다.
주의사항
모든 화폐는 무한하게 있다고 가정합니다.
입출력 예시
let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output = ocean(100, [10, 20, 50]);
console.log(output); // 10

*/

function ocean(target, type) {
  // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
  // 각 인덱스 no# = 만드려는 금액 을 의미
  // ex) target = 5, type = [1, 2, 5] 면
  // bag[3] = 2  => 3을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용
  // bag[4] = 2  => 4를 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용
  // bag[5] = 4  => 5를 만드는 경우의 수 = 1*5 , 1*3 + 2, 1 + 2*2, 5*1
  // 0 을 만들 수 있는 경우는 아무것도 선택하지 않으면 되기 때문에 bag[0] = 1 로 초기값 설정
  let bag = [1];

  // 인덱스 no# = 만드려는 금액 이기 때문에
  // bag 을 target 금액만큼의 길이를 가진 배열을 만들어 주고,
  // 경우의 수를 저장하기 위해 초기값은 모두 0으로 만들어 준다
  for(let i = 1; i <= target; i++)
    bag[i] = 0;
  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색   
  for(let i = 0; i < type.length; i++) {
  // target 금액까지 순차적으로 1씩 증가하면서    
    for(let j = 1; j <= target; j++)
  // bag의 인덱스가 type[i] 보다 큰 구간만
  // (작은 구간은 type[i]로 만들 수 없는 금액이기 때문에 탐색할 필요가 없다)    
      if(type[i] <= j)
  // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해준다       
        bag[j] += bag[j-type[i]];
  }
  // bag 의 target 인덱스에 target 금액을 훔칠 수 있는 경우의 수가 쌓이므로
  // 해당 값을 리턴해 준다
  return bag[target];
}