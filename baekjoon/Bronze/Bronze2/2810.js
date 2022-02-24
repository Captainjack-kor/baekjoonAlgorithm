const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if(input.length === 2) {
    rl.close();
  }
}).on('close', function () {
  let count = 0;
  // console.log(input);
  let arr = input[1];
  let result = "";

  if(arr.indexOf('L') === -1) {
    console.log(arr.length);
  } else {
    for(let i = 0; i < arr.length; i++) {
      
      if(i === 0) {
        result += "*";
      }
      if(arr[i] === 'S') {
        // count++; 
        result += 'S*'
      } 
      // else if(arr[i] === 'L' && arr[i - 1] === 'L' && arr[i + 1] === 'L') {
      //   continue;
      // } 
      else if (arr[i] === 'L') {
        // count++;
        result += 'LL*'
        i++;
      }
    }

    let star_count = 0;
    for(let i = 0; i < result.length; i++) {
      if(result[i] === "*") {
        star_count++;
      }
    }

    // console.log(count);
    // console.log(result);
    console.log(star_count);
  }

  process.exit();
});

