function solution(k, dungeons) {
    var answer = [];
    let max = 0;
    let count = 0;
    const getPermutations= function (arr, selectNumber) {
      const results = [];
      // console.log("π arr", arr);
      if (selectNumber === 1) {
        // console.log("π  arr",  arr);
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
        return arr.map((value) => [value]);  //! λ¦¬ν΄ μ μ []λ‘ λ¬Άμ΄ μ€. 
      }
      
      arr.forEach((fixed, index, origin) => {
        // console.log("origin: " + origin);
        // console.log(origin[index][0]);
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        // console.log("rest: " + rest);
        //! [same code] κ·Όλ° μκ° λ³΅μ‘λ μ¦κ°νλκ°? νμΈ νμ
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
        
      // console.log("π results", results);
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
    console.log("π answer", answer);
    // console.log("MAX: " + max);
    // console.log(value);
    // console.log(answer);
    return max;
}

// var t0 = performance.now();

// fib(50); // μ¬κΈ°μμ ν¨μ μ€νμ μμΌμ£ΌμΈμ
// solution(80, [[80,20],[50,40],[30,10]]);
// var t1 = performance.now();
// console.log("runtime: " + (t1 - t0) + 'ms')

console.log(solution(80, [[80,20],[50,40],[30,10]]));