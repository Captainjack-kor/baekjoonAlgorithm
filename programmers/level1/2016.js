// 2016 윤년
// function doomsday(month, day) {
//   if(
//     (month === 3 && day === 7) ||
//     (month === 5 && day === 9) ||
//     (month === 6 && day === 6) ||
//     (month === 7 && day === 11) ||
//     (month === 8 && day === 8) || 
//     (month === 9 && day === 5) ||
//     (month === 10 && day === 10) ||
//     (month === 11 && day === 7) ||
//     (month === 12 && day === 12) 
//   ) {
//     return "MON";
//   } else if ((month === 1 && day === 3) || 
//   (month === 2 && day === 7)) {
//     return "SUN"; // 윤년 예외
//   }
// }

// function solution(a, b) {
//   var answer = '';
//   let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   let anchor_day = 2; // 2016년 기준
//   let year = 16;
//   let target = (year % 12) + Math.floor(year / 12) + Math.floor((year % 12) / 4) + anchor_day; 
//   // 16년의 목과 나머지 합
//   // console.log(target); 
//   let result = 0;
//   result = target % 7;
//   // console.log(result);
//   console.log(dayArr[result]);
//   // 2016년의 둠스데이는 월요일 = "MON"
//   // 둠스데이 요일 기준으로 계산해야할 듯

//   let test = doomsday(a,b);

//   if(a === 3) {
//     console.log(dayArr[b % 7]);

//   }
//   return dayArr[result];
// }

function solution(a, b) {
  let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let year = 2016;
  // let date = new Date(`2016 ${a} ${b}`);
  // let date = new Date(`2016/${a}/${b}`);
  let date = new Date(`${a} ${b} ${year} 00:00:00`);
  // console.log(date);
  let day = date.getDay();
  console.log(dayArr[day]);
  return dayArr[day];
}

solution(5, 24); // "TUE"
// solution(1, 3); // "TUE"
solution(3, 30); // "WED"