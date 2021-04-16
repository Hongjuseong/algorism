// 중복된 문자는 제거

function union(arr) {
  let ix, ixLen;
  let result = '';

  for (ix = 0, ixLen = arr.length; ix < ixLen; ix++) {
    result = arr.indexOf(arr[ix]) === ix ? result + arr[ix] : result + '';
  }

  return result;
}

console.log(union('ksekkset'));