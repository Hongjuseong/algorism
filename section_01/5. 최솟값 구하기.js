// 7자리 입력 수 중 가장 작은 값

function calculate(arr) {
  let min = Math.min(...arr);

  return min;
}

console.log(calculate([5, 3, 7, 11, 2, 15, 17]));