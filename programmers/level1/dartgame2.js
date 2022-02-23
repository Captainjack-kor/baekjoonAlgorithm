function solution(dartResult) {
  var answer = 0;
  let str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  let point = 0;
  let starCount = false;
  let tempStar = 0;
  let pointArr = [];
  for(let i = 0; i < dartResult.length; i++) {
    if(starCount) {
      answer -= tempStar;
      tempStar *= 2;
      answer += tempStar;
      tempStar = 0;
      starCount = false;
    }
    
    if(str.indexOf(dartResult[i]) !== -1) {
      answer += point;
      if(str.indexOf(dartResult[i + 1]) !== -1) {
        pointArr.push(10);
      } else if(Number(dartResult[i]) !== 0){
        pointArr.push(dartResult[i]);
      }
      tempStar = point;
      point = Number(dartResult[i]);
    } 

    if(dartResult[i] === 'S') {
      point = Math.pow(point, 1);
      // console.log("S !")
    } else if(dartResult[i] === 'D') {
      point = Math.pow(point, 2);
      console.log(point);
      // console.log("D !")
    } else if(dartResult[i] === 'T') {
      point = Math.pow(point, 3);
      // console.log("T !")
    } 
    
    // else if(dartResult[i] === '*') {
    //   // tempStar = point;
    //   point *= 2;
    //   starCount = true;
    //   // console.log("* !!!")
    // } else if(dartResult[i] === '#') {
    //   point = -point;
    //   // console.log("# !!! ㅜㅜ")
    // }

    if(dartResult[i + 1] === undefined) {
      answer += point;
    }

    if(starCount && dartResult[i + 1] === undefined) {
      answer += tempStar;
    }

    // console.log("answer: " + answer)

  }

  console.log("point: " + pointArr);
  // console.log("pointArr: " + pointArr);
  // console.log(answer)
  return answer;
}

// console.log(Math.pow(3,2));
solution("1S2D*3T"); // 37 [1^1 * 2 + 2^2 * 2 + 3^3]
// solution("1D2S#10S"); // 9 [1^2 + 2^1 * (-1) + 10^1]
// solution("1D2S0T"); // 3 
// solution("1S*2T*3S"); // 23

// solution("1D2S3T*"); // 59
// 
solution("10D4S10D"); // 204 