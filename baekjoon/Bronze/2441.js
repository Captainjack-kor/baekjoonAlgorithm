const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on('line', function (line) {
  // input.push(line);
  input = Number(line);
  // input = line;
  rl.close();
}).on('close', function () {
  let str = "";
  if(input === 0) {
    console.log("");
  }
  // console.log(typeof(input));
  else {
    for(let i = 0; i < input; i++) {
      for(let j = 0; j < input; j++) {
        if(j >= i) {
          str += "*";
        } else {
          str += " ";
        }
      }
      // str += "\n";
      console.log(str);
      str = "";
    }
  }
  // console.log(input);

  process.exit();
});