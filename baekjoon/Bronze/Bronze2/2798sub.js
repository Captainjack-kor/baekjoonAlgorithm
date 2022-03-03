const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let example = input[0].split(' ').map(v => Number(v));
let card_arr = input[1].split(' ').map(v => Number(v));

let max = example[1];
let temp = 0;
let sum = 0;

// card_arr 에 있는 요소 3개를 계속 더해야한다

const getCombinations = (arr, selectNum) => { 
  //SelectNum이 골라야할 갯수네 
  const results = [];
  if(selectNum === 1) {
    return arr.map((el) => [el]); // 모든 요소에 더해주기위해서 하나짜리 다 쪼갠거.
    //여기서 리턴 만나기떄문에 [2] 처럼 하나의 요소로는 밑에 arr.forEach까지 안내려가네

  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 무조건 앞자리 하나짜르네? (위에 짤린 하나랑 더 해줌)
    const combinations = getCombinations(rest, selectNum - 1); // [3,4], 1
    // console.log(combinations);
    const attached = combinations.map((el) => [fixed, ...el]);
    // 진짜 말그대로 붙이네 킹받게 아 ㅋ
    // console.log(...attached);
    results.push(...attached);
  });
  return results;
}

console.log(getCombinations(card_arr, 3));

getCombinations(card_arr, 3).forEach((el) => {
  let sum = el.reduce((acc, cur) => 
    acc + cur
  )
  if(sum <= max) {
    if(temp < sum) {
      temp = sum;
    }
  }
})

console.log(temp);