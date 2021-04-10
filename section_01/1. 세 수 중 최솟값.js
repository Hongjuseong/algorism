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