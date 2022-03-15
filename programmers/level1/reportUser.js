function solution(id_list, report, k) {
  var answer = [];
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

  let tempArr = [];

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

    let name_temp = stack.pop().split(' ');
    if(tempArr.indexOf(name_temp[0] === -1)) {
      tempArr.push(name_temp[0])
      userObj[name_temp[1]]++; 
    }
  }

  const initResultLength = reportList.length;
  for(let i = 0; i < initResultLength; i++) {
    // console.log(userObj[id_list[i]]);
    // reportList.pop().split(' ')[0];
    // if(userObj[id_list[i]] >= 2) {
    // let reportUser = reportList.pop().split(' ')[0];
    // let reportedUser =  reportList.pop().split(' ')[1];
    // if(userObj[reportUser] >= 2) {
    if(userObj[reportList[i].split(' ')[1]] >= 2) {
      // userObj[stack.pop().split(' ')[0]] ==> frodo
      // for(let j = 0; j < initResultLength; j++) {
        // console.log(reportList[j]);
        resultArr[id_list.indexOf(reportList[i].split(' ')[0])]++;
      // }

    }
  }
  // console.log("stack: " + stack);

  console.log(userObj);

  answer = resultArr;
  console.log(answer);
  return answer;
}


solution(["muzi", "frodo", "apeach", "neo"], 
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2); // [2,1,1,0]

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); // [0,0]
