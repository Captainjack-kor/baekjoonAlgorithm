 function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        // console.log(prev);
        // prev: 이 부분은 증감식이라 처음에 작동안한다. return 된 now[now.length - 1]을 콜백을 받아 작동.
        // 그래서 바로 tail로 짤린 k가 온다.
        //아니넹? 작동은 하는데 빈 값이 출력 된다. 
        //! if(prev === "" ? console.log("당첨") : ""); 증명 => 첫 값은 그냥 빈 문자열
        
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);

        console.log("idx: " + idx);
        console.log("answer: " + answer);
        // console.log("now: " + now);
        return now[now.length - 1]; //tail
    }, "")
    //! 여기서 "" 초기 셋팅해줬음.

    console.log(answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0]);
    //Math.floor(answer / n) 이게 자신이 말한 번째를 표시해줌 ㅁㅊ;;;
    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}

solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
// solution(2,["hello", "one", "even", "never", "now", "world", "draw"]);
// solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]);
