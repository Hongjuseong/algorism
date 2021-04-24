function length(str, target) {
  let result = [];
  let another = [];
  let ix;
  let cnt = 0;

  // 좌측에서 증가
  for (ix = 0; ix < str.length; ix++) {
    if (str[ix] !== target) {
      cnt++;
      result.push(cnt);
    } else {
      cnt = 0;
      result.push(cnt);
    }
  }

  // 우측에서 감소
  for (ix = str.length - 1; ix >= 0; ix--) {
    if (str[ix] !== target) {
      cnt++;
      another.unshift(cnt);
    } else {
      cnt = 0;
      another.unshift(cnt);
    }
  }

  for (ix = 0; ix < result.length; ix++) {
    result[ix] = Math.min(result[ix], another[ix]);
  }

  return result;
}

console.log(length('teachermode', 'e'));
