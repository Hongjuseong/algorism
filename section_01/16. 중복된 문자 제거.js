// 중복된 문자는 제거

function union(arr) {
  let ix, ixLen;
  let result = '';

  for (ix = 0, ixLen = arr.length; ix < ixLen; ix++) {
    if (arr.indexOf(arr[ix]) === ix) result += arr[ix];
  }

  return result;
}

console.log(union('ksekkset'));


// function solution16(text) {
//   // 중복 제거를 위해 object를 썻는데 indexOf 를 쓰면 그냥 result 에다가 해도 될거 같다
//   const obj = {};
//   let result = '';
//   for (let char of text) {
//       if (!obj[char]) {
//           obj[char] = true;
//           result += char;
//       }
//   }
//   return result;
// }