function solution(N, road, K) {
  var answer = 0;
  const dist={};//양방향 정보 저장
  for(let i=0;i<road.length;i++){
      const [s,e,cost]=road[i];
      if(dist[s]){
          dist[s].push([e,cost]);//각 점에서 갈 수 있는 점과 비용 저장
      }else{
          dist[s]=[[e,cost]];
      }
      if(dist[e]){
          dist[e].push([s,cost]);
      }else{
          dist[e]=[[s,cost]];
      }
  }

  let vis=Array(2).fill(0).map(()=>Array(N+1).fill(-1));//1에서 갈 수 있는 지점

  const pq=[[1,0]];
  while(pq.length>0){
      pq.sort((a,b)=>a[1]-b[1]);//비용 적은 순 리턴
      const [v,cost]=pq.shift();

      if(vis[1][v]==-1){//아직 방문 안되었다. 나중에 같은 점 방문하는 경우 항상 비용이 크다
          vis[1][v]=cost;//지점 업데이트

          for(let k=0;k<dist[v].length;k++){
              
              let next=dist[v][k][0];
              let total=cost+dist[v][k][1];

              if(total>K)continue;//거리가 k보다 크면 안된다.
              if(vis[1][next]==-1){//아직 방문 안한 곳이라면 진행
                  pq.push([next,total]);
              }
          }
      }
  }
  for(let i=1;i<=N;i++){//방문할 수 있는 곳의 개수를 센다
      if(vis[1][i]!=-1)answer+=1;//자기자신도 포함한다.
  }
  
  console.log(answer);
  return answer;
}

solution("5", [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3);
solution("6", [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4);