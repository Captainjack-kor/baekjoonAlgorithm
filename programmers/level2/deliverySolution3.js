// https://m.blog.naver.com/ndb796/221234424646

// function getSmallIndex(N, visit_Check, distance) {
//   let INF = 10000;
//   let min = INF;
//   let index = 0;
//   // console.log(visit_Check);wcsd
//   for(let i = 0; i < N; i++) {
//     if(distance[i] < min && !visit_Check[i]) {
//       min = distance[i];
//       index = i;
//     }
//   }
//   return index;
// }

// function solution(N, road, K) {
//   let arr = [];
//   let INF = 10000;
//   let visit_Check = [];
//   let distance = [];
//   let start = 0;
  
//   for(let i = 0; i <= N; i++) {
//     // arr[i].push(i);
//     arr.push(Array(Number(N)).fill(INF));
//   }


//   visit_Check[start] = true;

//   for(let i = 0; i < road.length; i++) {
//     arr[i][i] = 0;
//     arr[road[i][0]][road[i][1]] = road[i][2];
//     arr[road[i][1]][road[i][0]] = road[i][2];
    
//     // arr[road[i][0] - 1][road[i][1] - 1] = road[i][2] - 1;
//     // arr[road[i][1] - 1][road[i][0] - 1] = road[i][2] - 1;

//     // console.log(arr[road[i][0]][road[0][1]]);
//   }
//   // for (let i = 0; i < road.length; i++) {
//   //   if(obj[i] =
// 	// }
//   arr.shift();
//   // console.log(arr);
//   // console.log(arr.length)

//   // for(let i = 0; i < N; i++) {
//   //   arr[i].shift();
//   // }

//   console.log(arr);


//   for(let i = 0; i < N; i++) {
//     distance[i] = arr[start][i];
//   }


//   console.log(distance);

//   for(let i = 0; i < N - 2; i++) {
//     let current = getSmallIndex(N, visit_Check, distance);
//     visit_Check[current] = true;
//     for(let j = 0; j < N; j++) {
//       if(!visit_Check[j]) {
//         if(distance[current] + arr[current][j] < distance[j]) {
//           distance[j] = distance[current] + arr[current][j];
//         }
//       }
//     }
//   }
//   console.log(distance);
//   let count = 0;
//   for(let i = 0; i < distance.length; i++) {
//     if(distance[i] <= K) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }


function getSmallIndex(N, visit_Check, distance) {
  let INF = 10000;
  let min = INF;
  let index = 0;
  // console.log(visit_Check);
  for(let i = 0; i < N; i++) {
    if(distance[i] < min && !visit_Check[i]) {
      min = distance[i];
      index = i;
    }
  }
  return index;
}

function solution(N, road, K) {
  let arr = [];
  let INF = 10000;
  let visit_Check = [];
  let distance = [];
  let start = 0;
  
  for(let i = 0; i <= N; i++) {
    // arr[i].push(i);
    arr.push(Array(Number(N) + 1).fill(INF));
  }


  visit_Check[start] = true;

  for(let i = 0; i < N; i++) {
    arr[i][i] = 0;
  }

  for(let i = 0; i < road.length; i++) {
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
  // console.log(arr);
  // console.log(arr.length)

  for(let i = 0; i < N; i++) {
    arr[i].shift();
  }

  console.log(arr);


  for(let i = 0; i < N; i++) {
    distance[i] = arr[start][i];
  }


  console.log(distance);

  for(let i = 0; i < N - 2; i++) {
    let current = getSmallIndex(N, visit_Check, distance);
    visit_Check[current] = true;
    for(let j = 0; j < N; j++) {
      if(!visit_Check[j]) {
        if(distance[current] + arr[current][j] < distance[j]) {
          distance[j] = distance[current] + arr[current][j];
        }
      }
    }
  }
  console.log(distance);
  let count = 0;
  for(let i = 0; i < distance.length; i++) {
    if(distance[i] <= K) {
      count++;
    }
  }
  console.log(count);
  return count;
}


solution("5", [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3); // 4
// solution("6", [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4); // 4

// solution("6", [[1,2,2],[1,4,1],[1,3,5],[2,4,2],[2,3,3],[3,5,1],[3,6,5],[4,5,1],[5,6,2]], 3); // 4

