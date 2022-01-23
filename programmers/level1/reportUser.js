function solution(id_list, report, k) {
  var answer = [];
  //k만큼

  // console.log(id_list);
  // id_list.forEach((el) => {
  //   console.log(el);
  // });

  let userObj = {};
  let resultArr = [];
  for(let i = 0; i < id_list.length; i++) {
    // console.log(id_list[i]);
    userObj[id_list[i]] = 0;
    resultArr.push(0);
  }

  // console.log(resultObj);

  // console.log(userObj);
  // for(let i = 0; i < id_list.length; i++) {
  //   // console.log(report[i].split(' '));
  //   for(let j = 0; j <= 1; j++) {
  //     console.log("secrets: "+ report[i].split(' ')[j]);
  //     if(report[i].split(' ')[j].indexOf(id_list[i]) !== -1) {
  //       // console.log("없음");
  //       userObj[report[i].split(' ')[j]]++;
  //     }
  //   }
  // }
  let stack = [];
  // console.log(report.length);
  const initLength = report.length;
  for(let i = 0; i < initLength; i++) {
    let temp = report.pop();
    if(stack.indexOf(temp) === -1) {
      stack.push(temp);
    }
  }

  let reportList = stack.slice();
  console.log(reportList);

  while(stack.length > 0) {
    userObj[stack.pop().split(' ')[1]]++; 
  }

  for(let i = 0; i < id_list.length; i++) {
    // console.log(userObj[id_list[i]]);
    if(userObj[id_list[i]] >= 2) {
      // userObj[stack.pop().split(' ')[0]] ==> frodo
      for(let j = 0; j < reportList.length; j++) {
        // console.log(reportList[j]);
        resultArr[id_list.indexOf(reportList[j].split(' ')[0])]++;
      }

    }
  }
  // console.log("stack: " + stack);

  console.log(userObj);

  answer = resultArr;
  console.log(answer);
  return answer;
}


solution(["muzi", "frodo", "apeach", "neo"], 
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
