const input = [];
let memo;

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    //N 받기
    const N = Number(input[0]);
    //memo[n]에는 n을 1로 만드는 최소 연산 횟수를 저장
    memo = [...Array(N + 1)];
    //초기값 설정
    memo[1] = 0;

    //2부터 N까지 연산 수행
    for (let n = 2; n <= N; i++) {
      //1을 빼는 연산은 어떤 수든 가능
      prevNumbers = [n - 1];
      //2로 나누어 떨어지면 2로 나누는 연산 가능
      if (n % 2 === 0) {
        prevNumbers.push(n / 2);
      }
      //3으로 나누어 떨어지면 3으로 나누는 연산 가능
      if (n % 3 === 0) {
        prevNumbers.push(n / 3);
      }

      //n을 1로 만드는 최소 연산 횟수는
      //(이전 수가 될 수 있는 숫자들을 1로 만드는 최소 연산 횟수들 중 작은 값) + 1
      memo[n] = Math.min(...prevNumbers.map((num) => memo[num])) + 1;
    }

    //N을 1로 만드는 최소 연산 횟수 출력
    console.log(memo[N]);
  });