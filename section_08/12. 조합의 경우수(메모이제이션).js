function solution(n, r) {
	let answer;

	const memo = Array.from({length: n + 1}, () => Array(n + 1).fill(0)); 
	// console.log(memo);

	function DFS(n, r) {
		if (memo[n][r]) return memo[n][r];
		if (n === r || r === 0) return 1;
		else return memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
	}

	answer = DFS(n, r);
	return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));

// 메모이제이션을 사용하면 성능 개선이 가능..