function solution(max, cnt) {
  let answer = [];
  let check = Array.from({length: cnt}).fill(0);
 
  function DFS(num) {

    if (num === cnt) {
      // console.log(check);
      answer.push([...check]);
      return;
    } else {
      
      for (let i = 1; i <= max; i++) {
        // console.log(`num = ${num}`);
        // console.log(`i = ${i}`);
        check[num] = i;  
        DFS(num + 1);
      }
    }
  }

  DFS(0);

  answer.push(answer.length);
  return answer;
}

console.log(solution(3, 2));