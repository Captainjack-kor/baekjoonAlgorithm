const { FORMERR } = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  // input.push(line);
  input.push(Number(line));
  if(input.length > 1) {
    rl.close();
  }

}).on('close', function () {
  // console.log(input);
  // 7,1 => 2 1 0
  let teamA = input[0];
  let teamB = input[1];
  let win_A = 0;
  let win_B = 0;
  let draw = 0;  
  let impossible_switch = false;
  while(teamA >= 3 || teamB >= 3) {
    if(teamA - 3 >= 0) {
      teamA -= 3;
      win_A++;
    } 

    if(teamB - 3 >= 0) {
      teamB -= 3;
      win_B++;
    } 


    // if(teamA === 2 && teamB === 2) {
    //   draw += 2;
    //   teamA -= 2;
    //   teamB -= 2;
    // }

    // if(teamA === 1 && teamB === 1) {
    //   draw++;
    //   teamA -= 1;
    //   teamB -= 1;
    // }
  }

  if(teamA === teamB) {
    draw += teamA;
    teamA = 0;
    teamB = 0;
  }

  if(teamA !== teamB) {
    impossible_switch = !impossible_switch;
  }
  // console.log(teamA, teamB);

  if(impossible_switch) {
    console.log(-1);
  } else {
    console.log(win_A, draw, win_B);
  }
  process.exit();
});

