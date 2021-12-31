function solution(numbers, target) {
    let answer = 0;
    let consoleCounter = 0;
    let consoleCounter2 = 0;
    function dfs(index = 0, sum = 0) {
      consoleCounter++;
      if(index === numbers.length) {
        if (sum === target) {
          answer++;
        }
        return;
      }
      
      if(index < numbers.length) {
        dfs(index + 1, sum + numbers[index]);
      }
      consoleCounter2++;
      if(index < numbers.length) {
        dfs(index + 1, sum - numbers[index]);
      }
    }

      
    dfs(0, 0);
    
    return answer;
}

console.log(solution([1,1,1,1,1], 3)); // 5
console.log(solution([1,1,1,1,1], 5)); // 1
console.log(solution([1,1,1,1,1], 4)); // 1