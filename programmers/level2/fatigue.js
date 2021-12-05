function solution(k, dungeons) {
    var answer = [];
    let max = 0;
    let count = 0;
    const getPermutations= function (arr, selectNumber) {
      const results = [];
      // console.log("🚀 arr", arr);
      if (selectNumber === 1) {
        // console.log("🚀  arr",  arr);
        // arr.map((el) => {
        //   console.log(el);
        //   if(k >= el[0]) {
        //     k -= el[1];
        //     count++;
        //   } else {
        //     answer.push(count);
        //   }      
        // })
        // count = 0;
        return arr.map((value) => [value]);  //! 리턴 전에 []로 묶어 줌. 
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
        // if(index === 0) {
          // console.log(...permutations);
        // }
        // console.log(fixed);
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        results.push(...attached); 
        // if(count > max) {
          //   max = count;
          // }
          // k = originK;
          // count = 0;
      });
        
      // console.log("🚀 results", results);
      // for(let i = 0; i < results.length; i++) {
      //   if(k >= results[i][0]) {
      //     k -= results[i][1];
      //     count++;
      //   } else {
      //     answer.push(count);
      //   }
      // }
      
      return results;
    };


    let value = getPermutations(dungeons, dungeons.length);
    // console.log(count);
    console.log("😎 answer", answer);
    // console.log("MAX: " + max);
    // console.log(value);
    // console.log(answer);
    return max;
}

// var t0 = performance.now();

// fib(50); // 여기에서 함수 실행을 시켜주세요
// solution(80, [[80,20],[50,40],[30,10]]);
// var t1 = performance.now();
// console.log("runtime: " + (t1 - t0) + 'ms')

console.log(solution(80, [[80,20],[50,40],[30,10]]));