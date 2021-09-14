//Longest increasing Subsequence

function solution(arr) {
  let answer = 0;

  const dp = Array.from({length: arr.length}, () => 0);

  // 첫 기준 1
  dp[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0; // 0 초기화

    for (let j = i - 1; j >= 0; j--) {

      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }

    dp[i] = max + 1;
    // console.log(dp)
    answer = Math.max(answer, dp[i]);
  }

  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3])); // 5
console.log(solution([12, 1, 2, 3, 15])); // 4
// 1 1 2 3 2 1 4 2