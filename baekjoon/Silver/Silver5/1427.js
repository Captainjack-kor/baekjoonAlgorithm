let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = input.split('').map(v => +v).sort((a, b) => b - a);

console.log(input.join(''));
