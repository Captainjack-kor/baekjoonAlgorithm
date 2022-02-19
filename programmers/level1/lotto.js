function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let z_count = 0; 

  lottos.sort((a,b) => { return a - b});

  console.log(lottos);
  
  lottos.forEach(element => {
    if(win_nums.indexOf(element) !== -1) {
      count++;
    } else if(element === 0){
      z_count++;
    }
  });

  console.log(count);
  console.log(z_count);
  let target = [count + z_count, count];
  console.log(target);
  for(let i = 0; i < 2; i++) {
    switch (target[i]) {
      case 6:
        console.log('1등');
        answer.push(1);
        break;
      case 5:
        console.log('2등');
        answer.push(2);
        break;
      case 4:
        console.log('3등');
        answer.push(3);
        break;
      case 3:
        console.log('4등');
        answer.push(4);
        break;
      case 2:
        console.log('5등');
        answer.push(5);
        break;
      case 1:
        console.log('6등');
        answer.push(6);
        break;
      case 0:
        console.log('6등');
        answer.push(6);
        break;
    }
  }
  
  console.log(answer);
  return answer;
}


// solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]) //	[3, 5]
// solution([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]) //	[1, 6]
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]) //	[1, 1]