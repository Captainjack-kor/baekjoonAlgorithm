function solution(people, limit) {
  var answer = 0;
  let boatAdd = 0;

  let sortedPeople = people.sort((a, b) => a - b);
  // console.log(sortedPeople);
  
  let leftIdx = 0;
  let rightIdx = sortedPeople.length - 1;
  // console.log(leftIdx, rightIdx);

  while(leftIdx < rightIdx) {
    if(sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) {
      leftIdx++;
      rightIdx--;
      boatAdd++;
    } else {
      rightIdx--;
    }

  }

  answer = people.length - boatAdd;
  return answer;
}

let test = solution([70, 50, 80, 50], 100);

console.log(test);

