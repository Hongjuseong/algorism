// 입력된 문자열에서 대문자는 소문자로 소문자는 대문자로 수정하여 출력
// 아스키 코드 65 ~ 90 대문자
// 97 ~ 122 소문자 (대문자와 32 차이)

function convertAnother(str) {
  let ix;
  let result = '';

  for (ix = 0; ix < str.length; ix++) {

    if (str.charCodeAt(ix) >= 65 && str.charCodeAt(ix) <= 90) {
      result += str[ix].toLowerCase();
    } else if (str.charCodeAt(ix) >= 97 && str.charCodeAt(ix) <= 122)
      result += str[ix].toUpperCase();
  }
  
  return result;
}

console.log(convertAnother('StuDY'));