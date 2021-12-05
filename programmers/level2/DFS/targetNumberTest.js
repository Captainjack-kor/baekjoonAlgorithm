function solution(numbers, target) {
    var answer = 0;

    let temp = [];

    const run = function(list, acc){
        if( list.length == 0 ){
          if( acc == target ){
              answer++;
          } 

          // result.push(acc);
          return;
        }
        let now = list.pop();
        //얕은(shallow) 깊은(deep) 복사
        //얕은 복사
        // run(list, acc+now);
        // run(list, acc-now);
        //깊은 복사
        run(list.slice(), acc + now);
        run(list.slice(), acc - now);

        // return result
    }

    run(numbers, 0, []);

    return answer;
}

console.log(solution([1,1,1,1,1], 3)); // 5
console.log(solution([1,1,1,1,1], 5)); // 1
console.log(solution([1,1,1,1,1], 4)); // 1