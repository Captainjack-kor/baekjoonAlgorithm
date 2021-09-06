/*
  * quickSort

  정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.


  ----------------------------------------------
  !주의
  1. 퀵 정렬을 구현해야 합니다.
  2. arr.sort 사용은 금지됩니다.
  3. 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
  ----------------------------------------------

  예시)
  * let output = quickSort([3, 1, 21]);
  * console.log(output); // --> [1, 3, 21]

  [Advanced]
  - quickSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.
*/

// naive solution
// const quickSort = function (arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   const lSorted = quickSort(left);
//   const rSorted = quickSort(right);
//   return [...lSorted, pivot, ...rSorted];
// };


const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1){
    return arr;
  }

  //[3,1,2,4]
  const pivot = arr[0]; // 피벗 0번째 기준 잡고
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) { // 피봇이 0으로 이미 지정했으니 let i는 1부터 탐색
    if (arr[i] <= pivot){
      left.push(arr[i]); // 피벗 보다 작으면 왼쪽
    } else {
      right.push(arr[i]); //피벗 보다 크면 오른쪽으로 할당
    }
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];

};

/*
function quickSort(arr, transform = (item) => item) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left, transform);
  const rSorted = quickSort(right, transform);
  return [...lSorted, pivot, ...rSorted];
}
*/