function solution(max, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
 
  function DFS(depth, sum) {
    // console.log(sum);
    if (depth === arr.length) {

      if (sum > max) return;
      else {
        // answer = sum;
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(depth + 1, sum + arr[depth]);
      DFS(depth + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));