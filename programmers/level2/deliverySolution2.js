function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a,b,c]) => {        
      adj[a].push({ to: b, time: c }); 
      adj[b].push({ to: a, time: c }); 
  });

  const pq = [{ to: 1, time: 0 }];
  dist[1] = 0;

  while(pq.length) {
      let {to, time} = pq.pop();

      adj[to].forEach(next => {
          if(dist[next.to] > dist[to] + next.time) {
              dist[next.to] = dist[to] + next.time;
              pq.push(next);
          }
      })
  }

  console.log(dist.filter((item) => item <= K ).length);
  return dist.filter((item) => item <= K ).length;
}



solution("5", [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3);
solution("6", [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4);