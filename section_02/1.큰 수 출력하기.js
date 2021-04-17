// 자신의 앞 수보다 큰 수만 출력

function bigNum(base, arr) {
  let result = [];
  let ix;

  // 처음 비교 수
  result.push(arr[0]);

  // 1번 다음 자리부터 비교시작
  for (ix = 1; ix < base; ix++) {

    if (arr[ix] > arr[ix - 1]) {
      result.push(arr[ix]);
    }

  }

  return result;
}

console.log(bigNum(6, [7, 3, 9, 5, 6, 12]));