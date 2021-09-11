const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//let input = [];
let input = "";

rl.on('line', function (line) {
  // console.log(line);
  input = line;
  rl.close();
}).on('close', function () {
  //console.log("test: " +input[0]);
  //console.log(typeof(line))
  // str.indexOf(a);
  let answer = "";
  // let temp = [];
  //console.log(typeof(String.fromCharCode("a"))); //! string
  for(let i = 97; i <= 122; i++) {
    // temp.push(String.fromCharCode(i));
    // console.log(input.indexOf(String.fromCharCode(i)));
    answer = answer + input.indexOf(String.fromCharCode(i)) + " ";
  }
  //console.log("result: " +input.indexOf("a"));
  // console.log(temp);

  console.log(answer.slice(0,-1));
  process.exit();
});
