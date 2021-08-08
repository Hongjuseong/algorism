function solution(arr, k, m) {
	let answer = 0;
	const n = arr.length;

	function DFS(depth, index, sum) {
		if (depth === k) {

			if (sum % m === 0) {
				answer++;
			}
		} else {

			for (let i = index; i < n; i++) {
				DFS(depth + 1, i + 1, sum + arr[i]);
			}
		}
	}

	DFS(0, 0, 0);	
	return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));