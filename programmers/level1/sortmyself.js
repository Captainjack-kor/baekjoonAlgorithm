function solution(strings, n) {
  var answer = [];
  let new_sorted_array = [];
  // let a = strings.sort((a, b) => { return a - b });
  // console.log(a);
  strings.forEach(element => {
    console.log(element[n]);
  });
  return answer;
}

solution(["sun", "bed", "car"], 1); // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"], 2); // 	["abcd", "abce", "cdx"]
