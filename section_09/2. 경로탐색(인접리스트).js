function solution(n, arr) {
  let answer = 0;
  const multi = Array.from({length: n + 1}, () => Array());
  const ch = Array.from({length: n + 1}, () => 0); 

  // 인접리스트
  for (let i = 0; i < arr.length; i++) {
    multi[arr[i][0]].push(arr[i][1]);
  }

  console.log(multi);

  function DFS(num) {
    if (num === n) {
      answer++;
    } 
    else {
      for (let i = 0; i < multi[num].length; i++) {

        if (ch[multi[num][i]] === 0) {
          ch[multi[num][i]] = 1;
          DFS(multi[num][i]);
          ch[multi[num][i]] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
];
console.log(solution(5, arr));