function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index = 0, sum = 0) {
      if(index === numbers.length) {
        if (sum === target) {
          answer++;
        }
        return;
      }
      
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    }

      
    dfs(0, 0);
    
    return answer;
}

console.log(solution([1,1,1,1,1], 3)); // 5
console.log(solution([1,1,1,1,1], 5)); // 1