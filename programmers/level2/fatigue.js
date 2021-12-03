function solution(k, dungeons) {
    var answer = [];
    let max = 0;
    const getPermutations= function (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) {
        // console.log(arr.map((value) => [value]));
        return arr.map((value) => [value]); 
        // return arr[0]; 

      }
      arr.forEach((fixed, index, origin) => {
        // console.log("origin: " + origin);
        // console.log(origin[index][0]);
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        // console.log("rest: " + rest);
        //! [same code] 근데 시간 복잡도 증가하는가? 확인 필요
        // const rest = origin.filter((el) => {
        //     if(el === origin[index]) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // })
        const permutations = getPermutations(rest, selectNumber - 1); 
        if(index === 0) {
          console.log(...permutations);
        }
        // const attached = permutations.map((permutation) => [fixed, ...permutation]); 
        // if(index === 0) {
        //   console.log("attached: " + attached);
        // }

        // results.push(...attached); 

        // if(count > max) {
        //   max = count;
        // }
        // k = originK;
        // count = 0;
      });

      return results;
    };

    let value = getPermutations(dungeons, dungeons.length);
    // console.log(count);
    // console.log("MAX: " + max);
    // console.log(value);
    return max;
}

// var t0 = performance.now();

// fib(50); // 여기에서 함수 실행을 시켜주세요
// solution(80, [[80,20],[50,40],[30,10]]);
// var t1 = performance.now();
// console.log("runtime: " + (t1 - t0) + 'ms')

console.log(solution(80, [[80,20],[50,40],[30,10]]));