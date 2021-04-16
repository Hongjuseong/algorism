// 중복된 단어 제거

function union(arr) {
  let result = [];

  for (let str of arr) {
    result.indexOf(str) === -1 ? result.push(str) : '';
  }

  return result;
}

console.log(union(['good', 'time', 'good', 'time', 'student']));