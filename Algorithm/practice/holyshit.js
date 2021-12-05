function solution(k, dungeons) {
  var answer = [];

    // 순서만드는 재귀함수
    let test = [1,2,3,4,5];
    let result = [];

    let make = function(rt, target) {
        if( target.length == 0 ){
            result.push(rt);
        }

        for(let i=0; i<target.length; i++){
            let temp = target.slice(0, i).concat(target.slice(i + 1));
            let copy = rt.slice();
            copy.push(target[i]);
            make(copy, temp);

            console.log(copy);
        }
    }

    console.log(make);
    // let value = make(k, dungeons);
    make([], test);
    return value;
}

// console.log(solution(80, [[80,20],[50,40],[30,10]]));
// console.log(solution(80, [[80,20],[50,40],[30,10]]));