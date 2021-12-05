function solution(s){
  if(s % 2 === 1) {
      return 0;
  }
  const sArr = s.split("");

    for(let i = 0 ; i < sArr.length - 1; i++){
      if(sArr[i] === sArr[i + 1]){
          sArr.splice(i, 2);
            i = -1;
      }
  }

return sArr.length === 0 ? 1 : 0;
}
console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0