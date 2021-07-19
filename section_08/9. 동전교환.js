function solution(arr, price) {
  let answer = Number.MAX_SAFE_INTEGER;
 
  function DFS(depth, sum) {
    if (sum > price) return;

    if (depth === arr.length) {

      if (sum === price) {
        answer = Math.min(answer, depth);
      }
      return;

    } else {

      for (let i = 0; i < arr.length; i++) {
        DFS(depth + 1, sum + arr[i]);
      }
      
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));