const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(' ');
let element = input[1].split(' ').map(v => +v).sort((a, b) => b - a);

// console.log(N);
// console.log(element);

let answer = [];
let standard = "";
let temp = "";
let result = "";

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // console.log("rest: "+ rest);
    // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); 
    // console.log("permutation: " + permutations);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]); 
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}


let list_arr = getPermutations(element, K);

for(let i = 0; i < +K; i++) {
  for(let j = 0; j < list_arr.length; j++) {
    if(result !== "") {
      temp = result;
    }

    temp += list_arr[j];

    if(Number(standard) < Number(temp)) {
      temp = "";
    } else {
      result = temp;
    }

    // if(N[i] <= element[j]) {
    //   answer.push(element[j]);
    //   break;
    // }
    console.log(temp);
    console.log("standard: " + standard);
  } 
}

console.log(result);


// 3333 3
// 1 2 3
// ------
// 3333 (답);

// 4111 3
// 4 8 9
// 999 (정답)
// 4099 (오답)

// 510 3
// 2
// 1 5 7
// 3

// 4
// 정답: 177
// 5
// 출력: 77