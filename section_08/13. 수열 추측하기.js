//nCr
function combinate(n, r) {
	let answer;

	const memo = Array.from({length: n + 1}, () => Array(n + 1).fill(0)); 

	function DFS(n, r) {
		if (memo[n][r]) return memo[n][r];
		if (n === r || r === 0) return 1;
		else return memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
	}

	answer = DFS(n, r);
	return answer;
}

function solution(n, f) {
	let answer = [];
	const ch = Array.from({length: n}, () => 0); // 0, 1 변환
	const tmp = Array.from({length: n}, () => 0); // 임시값
	const combi = Array.from({length: n}, () => 0); // 1 3 3 1

	function DFS(depth, sum) {
		if (answer.length) return;
		if (depth === n) {

			if (sum === f) {				
				answer = [...tmp];
			}
		} else {
			for (let i = 0; i < n; i++) {

				if (ch[i] === 0) {
					ch[i] = 1;
					tmp[depth] = i + 1;
					// console.log('tmp');
					// console.log(tmp[depth]);
					DFS(depth + 1, sum + (tmp[depth] * combi[depth]));
					ch[i] = 0;
				}
			}
		}
	}

	// 1 3 3 1
	for (let i = 0; i < n; i++) {
		combi[i] = combinate(n - 1, i);
	}

	DFS(0, 0);
	return answer;
}

console.log(solution(4, 16));

/*
3   1   2   4
1   3   3   1
3C0 3C1 3C2 3C3
*/