function solution() {
  const queue = [];
  queue.push(1); 

  while(queue.length) { 
    const v = queue.shift();
    console.log(v);

    for (let nv of [v * 2, v * 2 + 1]) {
        if (nv > 7) continue;
        queue.push(nv);
    }
  }
}

console.log(solution());

// - BFS 는 재귀적으로 동작하지 않는다.
// - 이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것이다 이를 검사하지 않을 경우 무한 루프에 빠질 위험이 있다.
// - BFS 는 방문한 노드들을 차례로 저장한 후 꺼낼 수 있는 자료 구조인 큐(Queue)를 사용함 
// - 즉 선입선출(FIFO) 원칙으로 탐색