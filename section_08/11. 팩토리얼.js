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


// function solution(n) {
// 	let answer;
// 	function DFS(n) {
// 		if (n === 1) return 1;
// 		else return n * DFS(n - 1);
// 	}
// 	answer = DFS(n);
// 	return answer;
// }

// console.log(solution(5));