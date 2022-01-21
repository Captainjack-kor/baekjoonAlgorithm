/*
인접 행렬 길찾기
문제
주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환해야 합니다.

입력
인자 1: matrix
Array 타입을 요소로 갖는 인접 행렬이 담긴 2차원 배열
인자 2: from
Number 타입의 시작 정점
인자 3: to
Number 타입의 도착 정점
출력
boolean 타입을 리턴해야 합니다.
입출력 예시

정점 0에서 2로 가는 길이 존재하는지 확인합니다.
0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.
*/

function getDirections(matrix, from, to) {

  // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당합니다.
  const queue = [from];
  const enqueue = (n) => queue.push(n);
  const dequeue = (n) => queue.shift();

  // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성합니다.
  const isVisited = new Array(matrix.length).fill(false);

  // 첫 정점 방문 여부를 표시합니다.
  isVisited[from] = true

  // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복합니다.
  while (queue.length > 0) {

    // queue에서 정점을 하나 빼서 now에 할당합니다.
    const now = dequeue();

    // 목적지인지 검사하고, 목적지라면 true를 반환합니다.
    if (now === to) return true;

    // 해당 정점의 간선들을 확인합니다.
    for (let next = 0; next < matrix[now].length; next++) {
      // 만약, 간선이 있고 방문하지 않았다면
      if (matrix[now][next] && !isVisited[next]){
        // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
        enqueue(next);
        // 해당 정점을 방문했다는 것을 표시합니다.
        isVisited[next] = true
      }
    }
    
  }

  // 길이 없다면 false를 반환합니다.
  return false;
}


const result = getDirections(
	[
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 0],
	],
	0,
	2
);
console.log(result); // true