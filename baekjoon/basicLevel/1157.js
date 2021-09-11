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
  input = input.toUpperCase();
  //console.log(input);
  let count = 0;
  let maxArr = [];
  let maxObject = {};

  for(let i = 0; i < input.length; i++) {
    if(!maxObject.hasOwnProperty(input[i])) {
        maxObject[input[i]] = 1;
    } else {
      maxObject[input[i]]++;
    }
  }

  //console.log(maxObject);
  //console.log(Object.values(maxObject));

  let max = Object.values(maxObject);

  //console.log(Math.max(...max));
  max = max.sort((a,b) => b - a);
  if(max[0] === max[1]) {
    console.log("?");
  } else {
    max = Math.max(...max);

    for(let i = 0; i < Object.keys(maxObject).length; i++) {
      if(max === Object.values(maxObject)[i]) {
        console.log(Object.keys(maxObject)[i]);
      }
    }
  }

  process.exit();
});

