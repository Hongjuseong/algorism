function solution(cnt, arr) {
  let answer = [];
  let check = Array.from({length: cnt}).fill(0);
 
  function DFS(num, prev) {

    if (num === cnt) {
      // console.log(check);
      answer.push([...check]);
      return;
    } else {
      
      for (let i = 0; i < arr.length; i++) {
        // console.log(`num = ${num}`);
        // console.log(`i = ${i}`);
        if (prev !== arr[i]) {
          check[num] = arr[i];  
          DFS(num + 1, check[num]);
        }
      }
    }
  }

  DFS(0, 0);

  answer.push(answer.length);
  return answer;
}

console.log(solution(2, [3, 6, 9]));