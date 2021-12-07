function isPrime(num) {
  if(num <= 1) {
    return false;
  }

  if(num === 2 || num === 3) {
    return true;
  }

  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }

    return true;
  }
}

function solution(numbers) {
  var answer = 0;   
  let result = [];
  if(numbers.length === 1) {
    // console.log("hi");
    if(isPrime(Number(numbers))) {
      return 1;
    } else {
      return 0;
    }
  }

  let numArr = numbers.split(''); 
  // console.log(numArr);

  let permutation = (arr, target = "") => {
    // const visited = new Array(arr.length).fill(false);
    for(let i = 0; i < arr.length; i++) {
      let new_target = target + arr[i]; // "" + "0" = "0";
      let deepPaste = arr.slice();
      deepPaste.splice(i, 1);

      // console.log((Number(new_target)));
      // console.log(isPrime(Number(new_target)));
      if(result.indexOf(Number(new_target)) === -1 && isPrime(Number(new_target))) {
        result.push(Number(new_target));
        // if(Number(new_target[0]) === 0) {
          // new_target.substring(1, new_target.length); // 앞 글자 뺴고 다.. // 아 근데 0이 많으면 어카지 --;
          // result.push(new_target);
          // let count = 0;
          // for(let i = 0; i < new_target.length; i++) {
          //   if(Number(new_target[i]) <= 0 ) {
          //     count++;
          //   } else {
          //     // console.log("origin: " + new_target);
          //     // new_target = new_target.substring(count, new_target.length);
          //     // new_target = new_target.splice(0, count);
          //     // console.log("CHECK: " + new_target);
          //     count = 0;
          //     // if(result.indexOf(new_target) === -1) {
          //       if(isPrime(Number(new_target))) {
          //         result.push(new_target);
          //       }
          //     // }
          //   }
          // }
        // } 
      }

      permutation(deepPaste, new_target);
    }

  }

  permutation(numArr);
  console.log(result);
  return result.length;
}

console.log(solution("17"));  //3
console.log(solution("011"));  //2
console.log(solution("0011"));  
console.log(solution("2"));  // 1
console.log(solution("172"));   //
console.log(solution("3"));  // 1
console.log(solution("4"));  // 0
console.log(solution("5"));  // 1


