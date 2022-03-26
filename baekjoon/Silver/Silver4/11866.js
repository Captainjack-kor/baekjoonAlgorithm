const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [people, kill] = input[0].split(' ').map(v => +v);

console.log(people, kill);

let people_list = [];

for(let i = 1; i <= people; i++) {
  people_list.push(i);
}

