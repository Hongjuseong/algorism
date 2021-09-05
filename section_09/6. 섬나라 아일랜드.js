function solution(arr) {
  let answer = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1]; 
  const dy = [0, 1, 1, 1, 0, -1, -1, -1]; 

  function DFS(x, y) {
    // console.log('섬');
    // console.log(x, y);
    arr[x][y] = 0; // 탐색한 섬은 0으로 바꿈

    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx > -1 && nx < 7 && 
         ny > -1 && ny < 7 &&
         arr[nx][ny] === 1) {

        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) { 

    for (let j = 0; j < arr.length; j++ ) {

      if (arr[i][j] === 1) { // 섬이면 탐색
        answer++; 
        // console.log('answer =' + answer);
        DFS(i, j);
      }
    }
  }

  return answer;
}

console.log(solution([
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
]));

function solution2(arr) {
  let answer = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1]; 
  const dy = [0, 1, 1, 1, 0, -1, -1, -1]; 

  const queue = [];

  for (let i = 0; i < arr.length; i++) { 

    for (let j = 0; j < arr.length; j++ ) {

      if (arr[i][j] === 1) { // 섬이면 탐색
        answer++; 
        // console.log('answer =' + answer);
        queue.push([i, j]);
        arr[i][j] = 0;

        while(queue.length) {
          const [x, y] = queue.shift();
      
          for (let k = 0; k < 8; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
      
            if (nx > -1 && nx < 7 && 
                ny > -1 && ny < 7 &&
                arr[nx][ny] === 1) {

                arr[nx][ny] = 0;
                queue.push([nx, ny]);
            }
          } 
        }
      }
    }
  }

  return answer;
}

console.log(solution2([
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
]));

// 8방향
// [-1, 0][-1, 1][0, 1][1, 1]
// [1, 0][1, -1][0, -1][-1, -1]