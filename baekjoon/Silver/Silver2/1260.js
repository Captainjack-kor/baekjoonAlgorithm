const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [V,E,S] = n.split(' ').map(v => +v);
const edge = arr.map(v => v.split(' ').map(W => +W))

edge.forEach(v => {
  if(v[0] > v[1])
  [v[0], v[1]] = [v[1], v[0]]
})
edge.sort((a, b) => {
  if(a[0] === b[0]) {
    return a[1] - b[1];
  }else{
    return a[0] - b[0];
  }
})

class Graph{
  constructor(v){
    this.vertices = v;
    this.edge = 0; 
    this.edgeTo = [];
    this.adj = [];
    this.marked = [];
    this.route=[];
    for(let i =0; i<=this.vertices; i++){
      this.marked[i] = false; 
      this.adj[i] = [];
    }
  }

  addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edge++;
  }

  dfs(v) {
    this.marked[v] = true;
    this.route.push(v)
    this.adj[v].forEach(w => {
      if(!this.marked[w]) {
        this.dfs(w);
      }
    })
  }

  bfs(s){
    let q = [];
    this.marked[s] = true;
    q.push(s);
    while(q.length>0){
      let v = q.shift();
      this.route.push(v);
      this.adj[v].forEach(w => {
        if(!this.marked[w]){
          this.edgeTo[w] = v;
          this.marked[w] = true;
          q.push(w)
        }
      })
    } 
  }
}

let answer = [];
let graph = new Graph(V);
let graph2 = new Graph(V);

edge.forEach(v => {
  graph.addEdge(v[0], v[1])
  graph2.addEdge(v[0], v[1])
})


graph.dfs(S);
graph2.bfs(S);
answer.push(graph.route.join(' '));
answer.push(graph2.route.join(' '));
console.log(answer.join('\n'));