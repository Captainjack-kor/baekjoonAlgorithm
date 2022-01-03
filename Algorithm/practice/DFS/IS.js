function solution(number, k) { 
  let answer = ''; 
  let cnt = 0; 
  let arr = []; 
  for(let i = 0; i < number.length; i++) { 
    while(arr.length !== 0){ // 카운트가 끝났으면 루프를 빠져나온다. 
      if(cnt === k) { 
        break; // 현재 스택에 있는 값이 비교하는 숫자보다 작다면 제거하고 카운트를 1 증가한다. 
      }
      if(arr[arr.length - 1] < number[i]){ 
        ++cnt; 
        arr.pop(); 
      } else {
        break; 
      }
    } // 스택이 비어있다면 다음 숫자를 넣는다. 
    arr.push(number[i]); 
  } 
  
  // answer = arr.join("").substr(0, number.length - k);
  answer = arr.join("");
  console.log(answer);
  return answer; 
}

solution("1234", 2);
solution("1924", 2);
solution("1231234", 3);
solution("4177252841", 4);
