// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    // console.log(lines);    
    let [A, B] = lines[0].split(' ').map(v => +v);
    console.log(A + B);
})


// let [A, B] = input[0].split(' ').map(v => +v);

// console.log(A + B);

