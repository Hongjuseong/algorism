// 가위바위보
// A가 이기면 A를 출력, B가 이기면 B를 출력, 비기면 D를 출력
// 1: 가위, 2: 바위, 3: 보

function RSP(base, aarr, barr) {
  let result = [];
  let ix;

  // 이거 밖에는 방법이 없나;
  for (ix = 0; ix < base; ix++) {

    // 비긴 경우
    if (aarr[ix] === barr[ix]) result.push('D');
    else if (aarr[ix] === 1 && barr[ix] === 3) result.push('A'); // 예외 처리 1 < 3
    else if (aarr[ix] === 2 && barr[ix] === 1) result.push('A'); // A의 경우만 다 할당해두면 B는 자동
    else if (aarr[ix] === 3 && barr[ix] === 2) result.push('A');
    else result.push('B');

}
  return result;
}

console.log(RSP(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));