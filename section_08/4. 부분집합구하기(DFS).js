function solution(num) {
  const arr = Array.from({length: num}).fill(false);
  let answer = [];

  function DFS(depth) {

    if (depth === arr.length + 1) {

      let str = '';

      for (let ix = 0; ix < arr.length; ix++) {
        const target = arr[ix];

        // true일 때 index + 1 값
        if (target) {
          str += `${ix + 1} `;
        }
      }

      // 공백인 경우 push 안 해주기 위해서 처리
      if (str.trim()) answer.push(str.trim());

    } else {
      arr[depth - 1] = true;
      DFS(depth + 1);
      arr[depth - 1] = false;
      DFS(depth + 1);
    }

  }

  DFS(1);
  return answer;
}

console.log(solution(3));