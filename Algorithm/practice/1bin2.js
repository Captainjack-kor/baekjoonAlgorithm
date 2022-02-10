//permutation with visit

function solution(k, dungeons) {
    const { length } = dungeons
    let isVisit = new Array(length).fill(false);
    let result = []
    const aux = (visit, arr = []) => {
        if(arr.length === length) {
            return result.push(arr);
        }
        
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


// function solution(k, dungeons) {
//     const { length } = dungeons;
//     let isVisit = new Array(length).fill(false);
//     let result = 0;
//     const aux = (visited, rest = k, depth = 0) => {
//         if(!visited.includes(false) || depth === length){
//             if(result < depth) result = depth;
//             return;
//         }
//         for(let i = 0; i < length; i++){
//             if(!visited[i]){
//                 visited[i] = true;
//                 if(dungeons[i][0] <= rest){
//                     aux(visited, rest - dungeons[i][1], depth + 1);
//                 }
//                 visited[i] = false;
//             }
//         }
//         return result < depth ? result = depth : result
//     }
//     aux(isVisit)
//     return result;
// }
