// 에라토스테네스의 체 O(NloglogN)

function solution(n) {
  let count = 0;
  let array = [];

  if (n <= 1) {
    return 0;
  }

  for (let i = 2; i <= n; i++) {
    array[i] = i;
  }

  // console.log(array);

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    for (let j = 2 * i; j <= n; j += i) {
      array[j] = false;
    }
  }

  // console.log(array);

  array.forEach((element) => {
    if (element) {
      count += 1;
    }
  });

  console.log(count);
  return count;
  
}

solution(10) //4
solution(5) //3