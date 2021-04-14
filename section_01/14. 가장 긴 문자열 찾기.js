// N개의 문자열 입력 그 중 가장 긴 문자열 출력

function theLong(arr) {
  let result = '';

  for (let str of arr) {

    if (result.length < str.length) {
      result = str;
    }

  }
  
  return result;
}

console.log(theLong(['teacher', 'time', 'student', 'beautiful', 'good']));