// 7자리 입력 수 중 가장 작은 값

function calculate(arr) {
  let min = Math.min(...arr);

  return min;
}

console.log(calculate([5, 3, 7, 11, 2, 15, 17]));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// function solution(arr) {
//   return arr.reduce((acc, n) => Math.min(acc, n), Number.MAX_SAFE_INTEGER)
// }

// console.log(solution([5, 3, 7, 11, 2, 15, 17]));