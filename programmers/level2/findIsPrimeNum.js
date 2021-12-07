function isPrime(num) {
  if(num < 2) {
    return false;
  }

  if(num === 2) {
    return true;
  }

  for(let i = 2; i < Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }

    return true;
  }
}

function solution(numbers) {
  var answer = 0;   
  let numArr = numbers.split(''); 
  console.log(numArr);

  const isVisit = new Array(numArr.length).fill(false);
  console.log("🚀 isVisit", isVisit);
  
  let result = [];

  const dfs = (visit, newArr = []) => {
    // 조건이 같을 떄 푸쉬가 아니고 
    // console.log(result.indexOf(newArr));
    // if(result.indexOf(newArr) === -1) { }
    if(newArr.length === numArr.length) {
      return result.push(newArr);
    }

    for(let i = 0; i < numArr.length; i++) {
      if(!visit[i]) {
        visit[i] = true;
        dfs(visit, newArr.concat(numArr[i]));
        // dfs(visit, newArr.concat(i));
        visit[i] = false;
      }
    }  
    
    // return newArr;
  }
  
  dfs(isVisit);
  // let value = dfs(isVisit);
  // console.log(value);
  // answer = permutation(numArr);
  console.log(result);
  return answer;
}


console.log(solution("17"));  //3
console.log(solution("011"));  //2
