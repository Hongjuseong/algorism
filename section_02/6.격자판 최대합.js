// 등수 구하기
// 같은 점수가 입력될 경우 높은 등수로 동일 처리

function calculate(base, arr) {
  let result = [];
  let ix;
  let jx;
  let vertical = 0;
  let cross = 0;
  let cross2 = 0
  
  // 각 행의 합
  for (ix = 0; ix < base; ix++) {
    result.push(arr[ix].reduce((prev, curr) => prev + curr));
  }

  // 각 열의 합
  for (ix = 0; ix < base; ix++) {

    for (jx = 0; jx < base; jx++) {
      vertical += arr[jx][ix];

      if (jx === base - 1) {
        // 각 열값
        result.push(vertical);
        vertical = 0;
      }
    }
  }

  // 대각선의 합
  for (ix = 0; ix < base; ix++) {
    cross += arr[ix][ix];
    cross2 += arr[ix][base - 1 - ix];
  }

  // 양 대각선 값
  result.push(cross);
  result.push(cross2);

  return Math.max(...result);
}

console.log(calculate(5, [[10, 13, 10, 12, 15],
                          [12, 39, 30, 23, 11],
                          [11, 25, 50, 53, 15],
                          [19, 27, 29, 37, 27],
                          [19, 13, 30, 13, 19]]));