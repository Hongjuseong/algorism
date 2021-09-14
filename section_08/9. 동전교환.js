function solution(arr, price) {
  let answer = Number.MAX_SAFE_INTEGER;
 
  function DFS(depth, sum) {
    if (sum > price) return;
    if (depth >= answer) return; // cut edge
    if (sum === price) {
      console.log(depth, sum);
      answer = Math.min(answer, depth);
    } else {

      for (let i = 0; i < arr.length; i++) {
        DFS(depth + 1, sum + arr[i]);
      }
      
    }
  }

  DFS(0, 0);
  return answer;
}

// function solution(arr, m) {
// 	let answer = Number.MAX_SAFE_INTEGER;
// 	let n = arr.length;

// 	function DFS(L, sum) {
// 		if (sum > m) return;
// 		// if (L >= answer) return;
// 		if (sum === m) {
// 			answer = Math.min(answer, L);
// 		} else {
// 			for (let i = 0; i < n; i++) {
// 				DFS(L+1, sum+arr[i]);
// 			}
// 		}
// 	}

// 	DFS(0, 0);
// 	return answer;
// }


console.log(solution([1, 2, 5], 15));
// console.log(solution([1, 2, 5], 18));
// console.log(solution([1, 5, 12], 15));