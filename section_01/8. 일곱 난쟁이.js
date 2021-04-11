// 9명에서 합이 100인 7명찾기
// 입력 순서대로 출력

function sevenDwarf(arr) {
  let ix, ixLen, jx, jxLen;
  const total = arr.reduce((prev, curr) => prev + curr, 0);

  // 0~7
  for (ix = 0, ixLen = 8; ix < ixLen; ix++) {

    // 1~8
    for (jx = ix + 1, jxLen = 9; jx < jxLen; jx++) {
      // console.log(jx);

      if (total - (arr[ix] + arr[jx]) === 100) {
        arr.splice(jx, 1);
        arr.splice(ix, 1);
      }
    }

  }

  return arr;
}

console.log(sevenDwarf([15, 20, 7, 23, 19, 25, 10, 8, 13]));