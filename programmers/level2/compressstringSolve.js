function solution(s) {
  var answer = s.length;

  for(var len = 1; len <= s.length / 2; len++){
      var str = "";
      var idx = 0;
      var tmp = s.substring(0, len);
      var cnt = 1;
      for(idx = len; idx <= s.length; idx += len){
          if(tmp === s.substring(idx, idx + len)){
            cnt++;
          }
          else{
            if(cnt === 1) {
              str += tmp;
            } else {
              str += cnt + tmp;
            }
            cnt = 1;
            tmp = s.substring(idx, idx + len);
          }
      }
      
      if(cnt === 1) {
        str += tmp;
      } else { 
        str += cnt + tmp;
      }
      
      answer = Math.min(answer, str.length);
    }
    console.log(answer);
    return answer;
  }

solution("ababcdcdababcdcd"); // 9
solution("aabbacccc"); // 7
solution("abcabcabcabcdededededede"); // 14
//2a2ba4c => 7; 
// solution("abac"); // 7
// solution("2a2ba3c"); // 7