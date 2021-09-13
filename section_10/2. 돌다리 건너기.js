function solution(n) {
  if (!n) return 1;
  if (n === 1) return 2;
  if (n === 2) return 3;

  let answer = 0;
  const arr = Array.from({length: n + 1}, () => 0);

  arr[1] = 2;
  arr[2] = 3;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  answer = arr[n];
  return answer;
}

console.log(solution(7));