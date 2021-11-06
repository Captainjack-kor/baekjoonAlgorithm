function addOneSecond(hour, minute, second) {
  if (second === 59) {
    minute += 1;
    second = 0;
  } else {
    second += 1;
  }

  if (minute === 60) {
    hour += 1;
    minute = 0;
  }

  if (hour === 24) {
    hour = 0;
  }

  return '1초 뒤에 ' + hour + '시 ' + minute + '분 ' + second + '초 입니다';
}

let output = addOneSecond(14, 17, 59);
console.log(output); // --> '1초 뒤에 14시 18분 0초 입니다'

output = addOneSecond(1, 59, 59);
console.log(output); // --> '1초 뒤에 2시 0분 0초 입니다'

output = addOneSecond(3, 24, 29);
console.log(output); // --> '1초 뒤에 3시 24분 30초가 입니다'
