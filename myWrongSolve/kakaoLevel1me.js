function solution(board, moves) {
  var answer = 0;
  
  // 바구니는 크기 제한이 없다.

  // 인형 종류는 5가지
  // 1 - 고양이, 2 - 무지, 3 - 콘, 4 - 피치, 5 - 프로도;
  
  // board[0]이 가장 위에서부터 깔림
  // 고로 for문을 반대로 돌리면 제일 아래서부터..?
  
  //크레인 움직이고, if(board[0])에 위치에 0이 아닌 숫자가 있다면 가장 먼저 그것부터 바구니에 넣어야한다.
  //console.log(...board[1]);
  
  let basket = [];
  
  // 2가지 방법을 정의 했는데 1. for문 돌면서 대응하는거 차례대로 처리할 것 인가.?
  // 2. 2차원배열을 크레인의 y축 기준으로 다시 정의 한 후에 다시 moves에 맞는 값과 비교 할 것인지 ?
  
  for(let j = 0; j < moves.length; j++) {
      let choice = moves[j]; // 1일 때 [0,0,2,2,5]
      //크레인의 위치를 나타내 준다.  moves[1,5,3,5,1,2,1,4];
      //0일 때, 0, 0, 0, 4, 3;
      for(let i = 0; i < board.length; i++) {   
          // console.log(board[i][choice - 1]); //크레인 Y축
          if(board[i][choice - 1] !== 0) {
              basket.push(board[i][choice - 1]);
              board[i][choice - 1] = 0;
              break;
              //i += 1; // 중지가 되는건가?
          } 
      } 
  }
  
  console.log("basket: " + basket); // 크레인에서 바스켓으로 하나 보내고 다시 공백(0)으로 만드는거 까지 확인
  
  // basket 실제
  // if(바구니에서 같은 인형이 있다면) answer++; 
  
  let check = 0;
  
  //basket
  while(answer > check || check === 0) {
      check = answer;
      for(let i = 0; i < basket.length; i++) {
          if(basket[i] === basket[i + 1]) {
              basket.splice(i, 2);
              answer += 2;
              console.log("result: " + basket);
              //i = -1;
          }
      }
  }
  
  
  console.log("answer: " + answer);
  return answer;
}