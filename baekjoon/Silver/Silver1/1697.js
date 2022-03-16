const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [start, target] = input[0].split(' ').map(v => +v);
const visit = Array.from({ length: 100000 }, () => 0);

function bfs(start) {
  const queue = [];
  queue.push([start, 0]);
  visit[start] = 1;
  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === target) return time;
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

let result = bfs(start);

console.log(result);