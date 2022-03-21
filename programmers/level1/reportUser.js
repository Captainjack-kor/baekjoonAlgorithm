function solution(id_list, report, k) {
  // var answer = Array.from({ length: id_list.length }, () => 0);
  var answer = [];
  // console.log(answer);
  let setMap = new Map();
  //* 최대 신고 가능 횟수 k

  id_list.forEach((el) => {
    setMap.set(el, 0);
  })

  let checkArr = [];
  let block_user_list = [];
  report.forEach((el) => {
    let [reportUser, reportSomeone] = el.split(' ');
    if(checkArr.indexOf(el) === -1) {
      setMap.set(reportSomeone, setMap.get(reportSomeone) + 1);
      if(setMap.get(reportSomeone) >= k) {
        block_user_list.push(reportSomeone);
        
      } 
      checkArr.push(el);
    }
  })

  // console.log(block_user_list);


  let count = 0;
  for(let i = 0; i < id_list.length; i++) {
    for(let j = 0; j < checkArr.length; j++) {
      let user = report[j].split(' ')[0];
      let result = report[j].split(' ')[1];
      // console.log(id_list[i]) 
      if(user === id_list[i] && block_user_list.indexOf(result) !== -1) {
        count++;
      }
    }
    answer.push(count);
    count = 0;
  }
  // console.log(answer);

  return answer;
}




solution(["muzi", "frodo", "apeach", "neo"], 
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2); // [2,1,1,0]

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); // [0,0]
