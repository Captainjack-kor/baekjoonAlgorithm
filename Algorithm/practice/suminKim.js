const arr = ["0", "1", "1"];
let result = [];

const getPermutation = (arr, fixed) => {
  if(arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i];
      const copyArr = arr.slice();
      copyArr.splice(i, 1);

      result.push(newFixed);

      getPermutation(copyArr, newFixed);
    }
  }
}

getPermutation(arr, '')

console.log(result);

// console.log(solution("17"));  //3
// console.log(solution("011"));  //2
