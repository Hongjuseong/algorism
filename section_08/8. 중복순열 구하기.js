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
console.log(solution(4, 3));

/*
0
1        2        3
1 2 3    1 2 3    1 2 3
*/

// num = 0
// i = 1
// num = 1
// i = 1
// num = 1
// i = 2
// num = 1
// i = 3
// num = 0
// i = 2
// num = 1
// i = 1
// num = 1
// i = 2
// num = 1
// i = 3
// num = 0
// i = 3
// num = 1
// i = 1
// num = 1
// i = 2
// num = 1
// i = 3