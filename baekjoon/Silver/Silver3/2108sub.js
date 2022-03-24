let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
const result = [];
const array = new Array(8001);
array.fill(0);
for (let i = 0; i < N; i++) {
  let index = Number(input[i]) + 4000;
  array[index]++;
}
for (let j = 0; j < array.length; j++) {
  if (array[j] !== 0) {
    for (let k = 0; k < array[j]; k++) {
      result.push(j - 4000);
    }
  } else {
    continue;
  }
}
// 산술평균 : N개의 수들의 합을 N으로 나눈 값
function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += array[i];
  }
  return Math.round(sum / N);
}
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
function getMedian(array) {
  const mid = Math.floor(array.length / 2);
  return array[mid];
}
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
function getMostValue(array) {
  const map = new Map();
  for (let i = 0; i < N; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      map.set(array[i], map.get(array[i]) + 1);
    }
  }
  let maxValue = 0;
  let answer = [];
  map.forEach((element, key) => {
    // forEach(값, 키, map 객체 자체)
    if (maxValue < element) {
      maxValue = element;
      answer = [];
      answer.push(key);
      // answer = key;
    } else if (maxValue === map.get(key)) {
      answer.push(key);
    }
  });
  return answer.length !== 1 ? answer[1] : answer[0];
}
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
function getRange(array) {
  return array[array.length - 1] - array[0];
}


let answer = [];
answer.push(getAverage(result));
answer.push(getMedian(result));
answer.push(getMostValue(result));
answer.push(getRange(result));


console.log(answer.join('\n'));
