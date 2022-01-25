/*
행렬의 덧셈
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

*/

function solution(arr1, arr2) {
  var answer = [];
  let result = [];
  for(let i = 0; i < arr1.length; i++) {
    if(arr1.length === 1) {
      result.push([arr1[0][0] + arr2[0][0]], [arr1[1][0] + arr2[1][0]]);
    } else {
      result.push([arr1[i][0] + arr2[i][0], arr1[i][1] + arr2[i][1]]);
    }
  }
  
  console.log(result);

  // console.log([[arr1[0][0] + arr1[0][1]], [arr2[0][0] + arr2[0][1]]]);
  // return [[arr1[0][0] + arr1[0][1]], [arr2[0][0] + arr2[0][1]]];
}

solution([[1,2],[2,3]], [[3,4],[5,6]]) // [[4,6],[7,9]]
solution([[1,2],[2,3],[4,5]], [[3,4],[5,6],[7,8]]) // [[4,6],[7,9],[11,13]]
solution([[1],[2]], [[3],[4]]) // [[4],[6]]