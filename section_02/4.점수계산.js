// 점수계산
// 1이면 정답, 0이면 오답
// 정답이면 1점, 오답이면 0점
// 연속적으로 정답이면 +1점씩 가산점

function calculate(base, arr) {
  let result = [];
  let ix;

  for (ix = 0; ix < base; ix++) {
    if (arr[ix]) {

      if (result[result.length - 1] >= 1) {
        result.push(result[result.length - 1] + 1);
      } else {
        result.push(1);
      }
      
    } else {
      result.push(0);
    }
  }

  return result.reduce((prev, curr) => prev + curr);
}

console.log(calculate(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));