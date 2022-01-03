function DFS(L, BeginWith) {
  //DFS tree 이용 
  //! 다음시작점 값을 가지고 있어야한다.
  //* 다음시작점 k
  // result = [0] * r 리스트 두개표현;


  // 종료조건
  if(L === r) {
    console.log(result);
    result = []; 
  } else {
   for(let i = BeginWith; i < n.length; i++) {
    result.push(n[i]);
    DFS(L + 1, i + 1);
   }
  }

  // console.log(result);
  return result;
} 


let n = [1, 2, 3];
let r = 2;
let result = [];

DFS(0, 0);