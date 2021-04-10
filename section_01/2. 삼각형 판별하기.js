// 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 크거나 같으면 그릴 수 없다.
// 가능이면 YES 아니면 NO 출력

function triangle(first, second, third) {
  let result = 'NO';
  let max;
  const total = first + second + third;

    // param 1, 2
    if (first >= second) {
      max = first;
    } else {
      max = second;
    }

    // min, param 3
    if (third >= max) {
      max = third;
    }

    // 판단
    result = (total - max) <= max ? 'NO' : 'YES';

  return result;
}

console.log(triangle(2, 2, 4));
// 1, 2, 2.999
