// 홀수
// 입력된 값 중 홀수만 찾아서 그 합과 최소값

function oddCalculate(arr) {
  const result = [];
  const odd = [];
  let ix, ixLen, total = 0, min;

  for (ix = 0, ixLen = arr.length; ix < ixLen; ix++) {

    if (arr[ix] % 2 === 1) {
      total += arr[ix];
      odd.push(arr[ix]);
    }
    
  }

  min = Math.min(...odd);

  result.push(total);
  result.push(min);

  return result;
}

console.log(oddCalculate([12, 77, 38, 41, 53, 92, 85]));