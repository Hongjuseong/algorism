function solution(arr) {
  let answer = 'NO';
  const allSum = arr.reduce((p, c) => p + c);
  const half = allSum / 2;

  function DFS(depth, sum) {
    if (depth === arr.length) {

      if (sum === half) { // 전체 합의 반 값과 비교
        answer = 'YES'
        return;
      }
    } else {
      DFS(depth + 1, sum + arr[depth]);
      DFS(depth + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
// console.log(solution([1, 3, 5, 6, 7, 12]));
// console.log(solution([1, 3, 5, 6, 7, 14]));
// console.log(solution([1, 3, 5, 6, 7, 16]));
// console.log(solution([1, 3, 5, 6, 7, 18]));