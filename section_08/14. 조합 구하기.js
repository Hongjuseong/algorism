function solution(n, m) {
	const answer = [];
	const tmp = Array.from({length: m}, () => 0);

	function DFS(depth, start) {
		if (depth === m) answer.push(tmp.slice());
		else {

			for (let i = start; i <= n; i++) {
				tmp[depth] = i;
				DFS(depth + 1, i + 1);
			}
		}
	}

	DFS(0, 1);	
	return answer;
}

console.log(solution(4, 2));

/*
0
1      2    3
2 3 4  3 4  4
*/