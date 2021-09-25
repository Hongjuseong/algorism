function solution(n) {
  if (!n) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let answer = 0;
  const arr = Array.from({length: n + 1}, () => 0); // 가는 방법의 수

  arr[1] = 1; // 1계단 1
  arr[2] = 2; // 2계단 1 + 1, 2

  // 3계단 부터 시작
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  answer = arr[n];
  return answer;
}

console.log(solution(7));

/*
1
2
3
5
8
13
21
*/

// 문제를 작은 단위로 쪼개서 접근하는 방식
// 답이 나오면 기록을 해두고 문제의 범위를 넓혀나감