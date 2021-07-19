function solution(num) {
  let answer = 1;

  function DFS(num) {

    if (num === 1) {
      return;
    } else {
      answer *= num;
      DFS(num - 1);   
    }

  }
  DFS(num);

  return answer;
}

console.log(solution(5));