function solution(k, dungeons) {
  // const {length} = dungeons
  let isVisit = new Array(dungeons.length).fill(false);
  console.log(isVisit);
  let result = [];
  const aux = (visit, arr = []) => {
      if(arr.length === dungeons.length) {
        return result.push(arr);
      }
      for(let i = 0; i < dungeons.length; i++){
          if(!visit[i]){
              visit[i] = true;
              // console.log(isVisit);
              aux(visit, arr.concat(i));
              // arr 배열 끝에 i 값이 추가 되는 형태.
              visit[i] = false;
          }
      }
  }
  aux(isVisit); // 제일 처음 aux([false, false, false], [])로 돌아감.
  console.log(result)
}

solution(3, [1, 2, 3]);