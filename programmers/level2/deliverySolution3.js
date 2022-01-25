// https://m.blog.naver.com/ndb796/221234424646

function getSmallIndex() {
  // let min = INF;
  let index = 0;
  // for(let i = 0; i < N; i++) {
  // }
  // return index;
}

function solution(N, road, K) {
  let arr = [];
  // let INF = "10000";

  for(let i = 0; i <= N; i++) {
    // arr[i].push(i);
    arr.push(Array(Number(N)).fill("INF"));
    // if(arr[i][0])
  }

  for(let i = 0; i < road.length; i++) {
    arr[i][i] = 0;
    arr[road[i][0]][road[i][1]] = road[i][2];
    arr[road[i][1]][road[i][0]] = road[i][2];
    
    // arr[road[i][0] - 1][road[i][1] - 1] = road[i][2] - 1;
    // arr[road[i][1] - 1][road[i][0] - 1] = road[i][2] - 1;

    // console.log(arr[road[i][0]][road[0][1]]);
  }
  // for (let i = 0; i < road.length; i++) {
  //   if(obj[i] =
	// }
  arr.shift();
  console.log(arr);


  for(let i = 0; i < N - 2; i++) {
    let current = getSmallIndex();
    
  }

}

solution("5", [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3);