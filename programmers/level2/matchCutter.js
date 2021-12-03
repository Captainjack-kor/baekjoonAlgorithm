function solution(s) {
    var answer = 0;
    let sArr = [];
    if(s.length % 2 !== 0) {
        return 0;
    }
    // sArr = s.split('');
    // console.log(sArr);
    let newArr= [];
    for(let i = 0; i < s.length; i++) {
        if(sArr[i] === sArr[i + 1]) {
            if(sArr.length === 0) {
                // break;
                return 1;
            } else {
                if(i === sArr.length - 1) {
                    i = 0;
                }
            }

        } else {
            newArr.push(sArr[i]);
        }
         // console.log(sArr);
        // if(sArr.length === 0) {
        //     escape = false;
        // }
    }
    
    // return 0;

    // console.log(sArr);
    return 0;
}

console.log(solution("babaacd")); // 1
console.log(solution("cdcd")); // 0
