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
    let result = [];
    let numArr = numbers.split(''); 
    console.log(numArr);

    let permutation = (arr, selectNum) => {
        const visited = new Array(arr.length).fill(false);
        let result = [];
        const dfs = () => {
        
        }
        
        // function dfs(k, )
    }
    
    
    answer = permutation(numArr, numArr.length);
    console.log(answer);
    return answer;
}


console.log(solution("17"));  //3
console.log(solution("011"));  //2
