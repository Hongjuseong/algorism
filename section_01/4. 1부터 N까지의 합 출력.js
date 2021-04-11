// 자연수 N 입력
// 1부터 N까지의 합 출력

function calculate(target) {
  const start = 1;
  let result;

  result = ((start + target) * target) / 2;

  return result;
}

console.log(calculate(100));


// function solution(n) {
//   let cnt = 0;
//   for (let i = 1; i <= n; i++) {
//     cnt += i;
//   }
//   return cnt;
// }

// for in -> 객체면 key, 배열을 돌리면 index (지양할 것)


// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// console.log(Object.keys(obj));


// var arr = [1, 2, 3];

// for (var item of arr) { -> 배열 일 때만 사용 가능
//   console.log(item);
// }
//  // 1, 2, 3

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// for (var item of obj) {
//   console.log(item);
// }
// Uncaught TypeError: obj is not iterable