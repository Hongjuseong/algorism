// 날짜의 일의 자리 숫자, 자동차 번호의 끝 2자리
// 일치하는 자동차 대수

function check(num, arr) {
  let ix, ixLen, result = 0;

  for (ix = 0, ixLen = arr.length; ix < ixLen; ix++) {

    if (arr[ix] % 10 === num) {
      result++;
    }
  }

  return result;
}

console.log(check(0, [12, 20, 54, 30, 87, 91, 30]));