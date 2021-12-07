const arr = ["0", "1", "1"];
let result = []; // 전역 변수

const getPermutation = (arr, fixed) => {
  if(arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i]; // '1' + "1" => "11"
      const copyArr = arr.slice(); //깊은 복사
      copyArr.splice(i, 1); // splice(0,1)
      // copyArr = [];
      // copyArr.splice(0,1); => [];

      result.push(newFixed); //result = ["0", "1", "11"]

      getPermutation(copyArr, newFixed); // getPermutation([], "11"); 
    }
  }
}

getPermutation(arr, '')

console.log(result);

// console.log(solution("17"));  //3
// console.log(solution("011"));  //2
