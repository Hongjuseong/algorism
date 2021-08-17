function solution(arr) {
  let answer = 0;

  const mx = [-1, 0, 1, 0];
  const my = [0, -1, 0, 1];

  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for(let k = 0; k < mx.length; k++) {
        const ax = x + mx[k];
        const ay = y + my[k];

        if((ax > -1 && ax < 7) && (ay > -1 && ay < 7) && arr[ax][ay] === 0) { 
          arr[ax][ay] = 1; 
          DFS(ax, ay); 
          arr[ax][ay] = 0;
        }
      }
    }
  }

  arr[0][0] = 1;
  DFS(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));

// 4방향 [-1, 0][0, -1][1, 0][0, 1]