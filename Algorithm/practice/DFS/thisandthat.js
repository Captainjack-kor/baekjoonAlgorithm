function solution(number, k) {
  var b = [];
  for (var i = 0; i < number.length; i++) {
    var c = number[i];
    while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
      b.pop();
      k--;
    }
    b.push(c);
    console.log(b);
  }

  b.splice(b.length - k, k);
  console.log(b.join(''))
  return b.join('');
}

// solution("1234", 2); // 34
solution("1924", 2); // 94
solution("1231234", 3); // 3234
// solution("4177252841", 4); // 775841
