function solution(n, m){  
  let answer = 0;

  // 0 ~ 15
  // i금액을 거슬러 줄 때의 동전의 갯수 저장
  const dp = Array.from({length: m + 1}, () => Number.MAX_SAFE_INTEGER);

  // 초기 0
  dp[0] = 0;

  for (let i = 0; i < n.length; i++) {

    // 1, 2, 5
    for (let j = n[i]; j <= m; j++) {
      // console.log(n[i]);
      // 최소 동전의 개수
      dp[j] = Math.min(dp[j], dp[j - n[i]] + 1);
    }

    console.log(dp)
  }

  answer = dp[m]; // 최소 동전 수

  return answer;
  
}

console.log(solution([1, 2, 5], 15));

// 1원
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// 2원
// 0 1 1 2 2 3 3 4 4 5  5  6  6  7  7  8
// 5원
// 0 1 1 1 1 1 2 2 2 2  2  3  3  3  3  3 (?)