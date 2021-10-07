function solution(board, moves) {
  var answer = 0;
  var stack = [];
  
  moves.forEach(index=>{
    var position = index-1;
    for(var i=0; i<board.length; i++){
      var temp = board[i][position];
    
      if( temp !=0 ){
        stack.push( temp );
        board[i][position] = 0;
        break;
      }
    }
    
    var last = stack.length;
    if( last > 1 ){
      if( stack[last-1] == stack[last-2] ){
          answer += 2;
          stack.pop();
          stack.pop();
      }
    }
  })
  
  console.log(answer);
  return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);