// 3자리 입력 수 중 가장 작은 값

function calculate(first, second, third) {
  let min;

    // param 1, 2
    if (first < second) {
      min = first;
    } else {
      min = second;
    }

    // min, param 3
    if (third < min) {
      min = third;
    }

  return min;
}

console.log(calculate(6, 3, 2));

// let answer = (a < b ? a : b) < c ? (a < b ? a : b) : c;
// return answer;

// 한 줄이면 중괄호를 안 써도 됨
// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }