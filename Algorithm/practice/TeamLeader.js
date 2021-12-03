function solution(k, dungeons) {
  var answer = [];

  //  순서만드는 재귀함수
//     let test = [1,2,3,4,5];
//     let result = [];

//     let make = function(rt, target) {
//         if( target.length == 0 ){
//             result.push(rt);
//         }

//         for(let i=0; i<target.length; i++){
//             let temp = target.slice(0,i).concat(target.slice(i+1));
//             let copy = rt.slice();
//             copy.push(target[i]);
//             make(copy, temp);
//         }
//     }

//     make([],test);

  let make = function(eg, target) {
      if( target.length === 0 ){
          answer.push(dungeons.length);
      }

      for(let i=0; i<target.length; i++){
          let now = target[i];
          if( eg < now[0] ){
              answer.push(dungeons.length-target.length);
          }else{
              let temp = target.slice(0,i).concat(target.slice(i+1));
              make(eg - now[1], temp);
          }
      }
  }

  make(k,dungeons);

  return Math.max.apply(null, answer);
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));