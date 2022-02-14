function solution(arr1, arr2) {
  var answer = [];
  let result = [];
  // console.log(arr1[0]);
  // console.log(arr2[0].length);
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr1[0].length; j++) {
      // console.log(arr1[i][j]);
      // console.log(i, j);
      if(arr1[i][j] && arr2[i][j]) {
        result.push(arr1[i][j] + arr2[i][j]);
        // console.log(result);
      }
    }

    answer.push(result);
    // console.log(result);
    result = [];
  }
  console.log(result);
  console.log(answer);
  return result;
}

solution([[1,2],[2,3]], [[3,4],[5,6]]); // [[4,6],[7,9]]
solution([[1],[2]], [[3],[4]]); // [[4],[6]]
solution([[1,1,1],[2,2,2],[3,3,3]], [[3,3,3],[4,4,4],[5,5,5]]); // [[4,4,4],[6,6,6],[8,8,8]]