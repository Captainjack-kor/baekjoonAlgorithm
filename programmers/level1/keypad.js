function solution(numbers, hand) {
  var answer = '';
  // let pad = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let present = 0;
  numbers.forEach(element => {
    // 누른 번호보다 5이상 차이나면 거리가 2칸
    // 5보다 작다면 거리가 1칸
    // element

    present++;
  });

  console.log(answer);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"); // 	"LRLLLRLLRRL"
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"); // 	"LRLLRRLLLRR"
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"); // 	"LLRLLRLLRL"