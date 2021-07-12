function solution(limit, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
 
  function DFS(depth, point, time) {
    // console.log(point);
    // console.log(`time 은 ${time}`);
    if (depth === arr.length) {

      if (time > limit) return;
      else {
        answer = Math.max(answer, point);
      }
    } else {
      DFS(depth + 1, point + arr[depth][0], time + arr[depth][1]);
      DFS(depth + 1, point, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution(20, [[10, 5],
                      [25, 12],
                      [15, 8],
                      [6, 3],
                      [7, 4]]));