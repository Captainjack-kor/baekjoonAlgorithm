function solution(k, dungeons) {
  const {length} = dungeons
  let isVisit = new Array(length).fill(false);
  let result = []
  const aux = (visit, arr = []) => {
      if(arr.length === length) return result.push(arr);
      for(let i = 0; i < length; i++){
          if(!visit[i]){
              visit[i] = true;
              aux(visit, arr.concat(i))
              visit[i] = false;
          }
      }
  }
  aux(isVisit)
  console.log(result)
}