function solution(k, dungeons) {
  const { length } = dungeons;
  // const length = dungeons.length;
  // console.log(length);
  let isVisit = new Array(length).fill(false);
  // console.log(isVisit);
  let result = [];
  const aux = (visit, arr = []) => {
    // console.log(visit);
      if(arr.length === length) {
        // for(let i = 0; i < arr.length; i++) {
        //   if( k >= arr[])
        // }
        return result.push(arr);
      }

      for(let i = 0; i < length; i++){
          if(!visit[i] && k >= arr[i][0]){
              visit[i] = true;
              // console.log("🚀 visit", visit);
              // console.log(dungeons[i]);
              // aux(visit, arr.concat(i));
              aux(k - arr[i][0], )
              // aux(visit, arr.push(dungeons[i]));
              //초깃 값이 [false, false, false] 다 넘어감.
              visit[i] = false;
          }
      }
  }
  aux(isVisit)
  console.log(result)
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));