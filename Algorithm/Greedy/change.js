// 거스름 돈

// N = 1,260
// [500, 100, 50, 10]
//* 큰것들은 작은 수의 배수니까 정렬 해서 접근


function solution(num) {
  let n = num;
  let count = 0;

  let arr = [500, 100, 50, 10];

  for(let coin of arr) {
    count += Math.floor(n / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
    // 0 = 0 + 1260;
    n %= coin;
    // n = n % coin; 1260 / 500 
    // count++;
    console.log("coin: " + n);
  }
  console.log(count);
}


solution(1260);
