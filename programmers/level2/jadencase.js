function solution(s) {
  var answer = '';
  s = s.split('');
  console.log(s);
  for(let i = 0; i < s.length; i++) {
    if(i === 0 && typeof(s[i]) === 'string') {
      answer += s[i].toUpperCase();
    } else if(s[i - 1] === ' ' && typeof(s[i]) === 'string') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }

  // answer = answer.trim();
  console.log(answer);
  return answer;
}

// s	return
solution("3people unFollowed me"); // "3people Unfollowed Me"
// solution("for the last week");	// "For The Last Week"
solution(" A  Sdf Fft ") // " A  Sdf Fft ""