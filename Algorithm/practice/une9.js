function solution(k, dungeons) {
  const N = dungeons.length
  const visited = new Array(N).fill(0)
  console.log(visited);
  let answer = 0

  function dfs(k, count){
      answer = Math.max(count, answer);

      for (let j = 0; j < N; j++){
          if (k >= dungeons[j][0] && !visited[j]){
              visited[j] = 1
              dfs(k - dungeons[j][1], count + 1)
              visited[j] = 0 
          }
          console.log(visited);
      }
  }

  dfs(k, 0);
  return answer;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));