// computeSquareRoot

function computeSquareRoot(num) {
  // console.log(Math.sqrt(num));

  const diffs = [1, 0.1, 0.01, 0.001];

  let base = 1;

  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) {
      base = base + diffs[i];
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }

  return Number(base.toFixed(2));

  /*

  !힌트
  소수점 처리는 javascript 표준 내장 객체인 Number를 검색해 봅니다. 
  (js decimal places limit 또는 자바스크립트 소수점 자리수)
  항상 타입을 주의하여야 합니다.
  각 자리수(1, 0.1, 0.01, 0.001)마다 (목표값을 넘지 않는) 근사값을 구하는 방식이 있습니다.
  제곱근을 구하는 방법 중 바빌로니아 법이 있습니다. 
  바빌로니아 법의 점화식(recurrence formula)을 이해할 수 있다면, 
  해당 식을 이용해 문제를 풀어도 좋습니다.
  */
}

const answer = computeSquareRoot(22);
// dd
console.log(answer);