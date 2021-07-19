function solution(money, price) {
  let answer = [];
  let check = Array.from({length: money.length}).fill(0);
 
  function DFS(num) {

    if (num === money.length) {

      if (price === [...check].reduce((prev, curr) => prev + curr)) {
        answer.push([...check], [...check].length);
      }
      return;
    } else {
      
      for (let i = 0; i < money.length; i++) {
        check[num] = money[i];  
        DFS(num + 1);
      }
    }
  }

  DFS(0);

  return answer[1];
}

console.log(solution([1, 2, 5], 15));