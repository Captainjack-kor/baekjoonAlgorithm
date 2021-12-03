function solution(numbers, target) {
    let answer = 0;
    let consoleCounter = 0;
    let consoleCounter2 = 0;
    function dfs(index = 0, sum = 0) {
      consoleCounter++;
      // console.log("그래 그리 쉽지는 않겠지 나를 허락해준 세상이란 " + consoleCounter);
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
      // console.log("손쉽게 다가오는 편하고도 감미로운 공간이아냐 그래도 날아 오를꺼야 작은 날개 짓에 꿈을 담아 조금만 기다려봐 oh my love " + consoleCounter2);
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