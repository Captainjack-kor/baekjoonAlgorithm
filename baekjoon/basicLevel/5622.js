const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  //console.log(input);
  let count = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[i] === 'A' || 
       input[i] === 'B' ||
       input[i] === 'C') {
        count += 2;
    } else if(input[i] === 'D' || 
              input[i] === 'E' ||
              input[i] === 'F' ){
        count += 3;
    } else if(input[i] === 'G' || 
              input[i] === 'H' ||
              input[i] === 'I' ){
        count += 4;
    } else if(input[i] === 'J' || 
              input[i] === 'K' ||
              input[i] === 'L' ){
        count += 5;
    }  else if(input[i] === 'M' || 
               input[i] === 'N' ||
               input[i] === 'O' ){
        count += 6;
    }  else if(input[i] === 'P' || 
               input[i] === 'Q' ||
               input[i] === 'R' ||
               input[i] === 'S'){
        count += 7;
    }  else if(input[i] === 'T' || 
               input[i] === 'U' ||
               input[i] === 'V' ){
        count += 8;
    }   else if(input[i] === 'W' || 
                input[i] === 'X' ||
                input[i] === 'Y' ||
                input[i] === 'Z'){
        count += 9;
    }  
  }
  console.log(count + input.length);
  process.exit();
});
