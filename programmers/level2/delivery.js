// const { cloneEnvironment } = require("estraverse");

function solution(N, road, K) {
  var answer = 0;

  edges = road;

	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	const adjList = {};

	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}

	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push({ "vertex" : edges[i][1], "distance" : road[i][2]});
		adjList[edges[i][1]].push({ "vertex" : edges[i][0], "distance" : road[i][2]});
		// adjList[edges[i][0]].push(edges[i][1]);
		// adjList[edges[i][1]].push(edges[i][0]);
	}

  console.log(adjList);

	const visited = {};

	let count = 0;

	for (let vertex = 0; vertex <= maxVertex; vertex++) {
		if (!visited[vertex]) {
			bfs(adjList, vertex, visited, K);
			count++;
		}
	}

  // 카운트를 반환합니다.
	return count;
} 

function bfs(adjList, vertex, visited, K) {
	const queue = [vertex];

	visited[vertex] = true;

	while (queue.length > 0) {
    let sum = 0;
		var cur = queue.shift();
    // console.log(cur);
    // console.log(adjList[cur].length);
    // console.log(adjList[cur].length);
    // if(adjList[cur].length !== undefined) {
      for (let i = 0; i < adjList[cur].length; i++) {
        // console.log(adjList[cur][i][]);

        // console.log(road[i][0]);
        // console.log(adjList[cur][i]);
        // console.log("length: " + Number(road[i][2]));
        // sum += road[i][2];

        if (!visited[adjList[cur][i].vertex]) {
          // console.log(adjList[cur][i].vertex);

          sum += adjList[cur][i].distance;
          console.log(adjList[cur][i].distance);
          queue.push(adjList[cur][i].vertex);
          console.log(queue);
          visited[adjList[cur][i].vertex] = true;
          // console.log(visited);
          // console.log("K: " + K);
        }
        console.log("sum: " + sum);
        console.log("오늘은 여기까지");
    
      }
    sum = 0;
    // }

    // console.log(adjList[cur])
  }

    // console.log(sum);
    // console.log("오늘은 여기까지");
}


solution("5", [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3);