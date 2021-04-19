// 상하좌우 보다 큰 숫자는 봉우리로 카운트

function calculate(base, arr) {
  let ix;
  let jx;
  let count = 0;
  let xnum = 0;
  let ynum = 0;
  let mxnum = 0;
  let mynum = 0;

  // 각 열의 합
  for (ix = 0; ix < base; ix++) {

    for (jx = 0; jx < base; jx++) {
      
      // 사방면
      xnum = ix + 1 === base ? 0 : arr[ix + 1][jx];
      ynum = jx + 1 === base ? 0 : arr[ix][jx + 1];
      mxnum = ix - 1 === -1 ? 0 : arr[ix - 1][jx];
      mynum = jx - 1 === -1 ? 0 : arr[ix][jx - 1];

      if (arr[ix][jx] > ynum && 
          arr[ix][jx] > xnum && 
          arr[ix][jx] > mxnum &&
          arr[ix][jx] > mynum) {
        count++;
      }
    }
  }


  return count;
}

// && arr[ix - 1][jx - 1] > arr[ix][jx - 1]

console.log(calculate(5, [[5, 3, 7, 2, 3],
                          [3, 7, 1, 6, 1],
                          [7, 2, 5, 3, 4],
                          [4, 3, 6, 4, 1],
                          [8, 7, 3, 5, 2]]));