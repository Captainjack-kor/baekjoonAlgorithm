 function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        // console.log(prev);
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        // console.log("now: " + now);
        return now[now.length - 1]; //tail
    }, "")

    console.log(answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0]);
    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}

solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
// solution(2,["hello", "one", "even", "never", "now", "world", "draw"]);
// solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]);
