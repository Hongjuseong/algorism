function solution(n, m) {
  let answer = 0;
  const dp = Array.from({length: m + 1}, () => 0);

  for (let i = 0; i < n.length; i++) {
    const score = n[i][0]; // 10
    const time = n[i][1];  // 5

    // max 20초
    for (let j = time; j <= m; j++) {
      dp[j] = Math.max(dp[j], dp[j - time] + score);
    }
  }

  answer = dp[m];
  return answer;
}

console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20));