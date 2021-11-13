const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  // input.push(line);
  input = line;
  rl.close();
}).on('close', function () {
  let result = input.split(" ");

  let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; /// 0 to 6
  
  let dayChecker = (month, day) => {
    if(month === 1 || month === 10) {
      if(day % 7 === 1) {
        console.log(dayArr[1]);
      } else if(day % 7 === 2) {
        console.log("TUE");
      } else if(day % 7 === 3) {
        console.log("WED");
      } else if(day % 7 === 4) {
        console.log("THU");
      } else if(day % 7 === 5) {
        console.log("FRI");
      } else if(day % 7 === 6) {
        console.log("SAT");
      } else if(day % 7 === 0) {
        console.log("SUN");
      } 
    } else if(month === 2 || month === 3 || month === 11) {
      if(day % 7 === 1) {
        console.log(dayArr[4]);
      } else if(day % 7 === 2) {
        console.log(dayArr[5]);
      } else if(day % 7 === 3) {
        console.log(dayArr[6]);
      } else if(day % 7 === 4) {
        console.log(dayArr[0]);
      } else if(day % 7 === 5) {
        console.log(dayArr[1]);
      } else if(day % 7 === 6) {
        console.log(dayArr[2]);
      } else if(day % 7 === 0) {
        console.log(dayArr[3]);
      }
    } else if(month === 4 || month === 7) {
      if(day % 7 === 1) {
        console.log(dayArr[0]);
      } else if(day % 7 === 2) {
        console.log(dayArr[1]);
      } else if(day % 7 === 3) {
        console.log(dayArr[2]);
      } else if(day % 7 === 4) {
        console.log(dayArr[3]);
      } else if(day % 7 === 5) {
        console.log(dayArr[4]);
      } else if(day % 7 === 6) {
        console.log(dayArr[5]);
      } else if(day % 7 === 0) {
        console.log(dayArr[6]);
      }
    } else if(month === 5) {
      if(day % 7 === 1) {
        console.log(dayArr[2]);
      } else if(day % 7 === 2) {
        console.log(dayArr[3]);
      } else if(day % 7 === 3) {
        console.log(dayArr[4]);
      } else if(day % 7 === 4) {
        console.log(dayArr[5]);
      } else if(day % 7 === 5) {
        console.log(dayArr[6]);
      } else if(day % 7 === 6) {
        console.log(dayArr[0]);
      } else if(day % 7 === 0) {
        console.log(dayArr[1]);
      }
    } else if(month === 6) {
      if(day % 7 === 1) {
        console.log(dayArr[5]);
      } else if(day % 7 === 2) {
        console.log(dayArr[6]);
      } else if(day % 7 === 3) {
        console.log(dayArr[0]);
      } else if(day % 7 === 4) {
        console.log(dayArr[1]);
      } else if(day % 7 === 5) {
        console.log(dayArr[2]);
      } else if(day % 7 === 6) {
        console.log(dayArr[3]);
      } else if(day % 7 === 0) {
        console.log(dayArr[4]);
      }
    } else if(month === 8) {
      if(day % 7 === 1) {
        console.log(dayArr[3]);
      } else if(day % 7 === 2) {
        console.log(dayArr[4]);
      } else if(day % 7 === 3) {
        console.log(dayArr[5]);
      } else if(day % 7 === 4) {
        console.log(dayArr[6]);
      } else if(day % 7 === 5) {
        console.log(dayArr[0]);
      } else if(day % 7 === 6) {
        console.log(dayArr[1]);
      } else if(day % 7 === 0) {
        console.log(dayArr[2]);
      }
    } else if(month === 9 || month === 12) {
      if(day % 7 === 1) {
        console.log(dayArr[6]);
      } else if(day % 7 === 2) {
        console.log(dayArr[0]);
      } else if(day % 7 === 3) {
        console.log(dayArr[1]);
      } else if(day % 7 === 4) {
        console.log(dayArr[2]);
      } else if(day % 7 === 5) {
        console.log(dayArr[3]);
      } else if(day % 7 === 6) {
        console.log(dayArr[4]);
      } else if(day % 7 === 0) {
        console.log(dayArr[5]);
      }
    }
  };

  
  dayChecker(Number(result[0]),Number(result[1]));
  // console.log(input);

  process.exit();
});

