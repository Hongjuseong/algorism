// 대문자로 이루어진 영어단어가 입력되면 'A'를 모두 '#'으로 변환

function AtoSharp(str) {
  let result;

  result = str.replace(/A/gi, '#');

  return result;
}

console.log(AtoSharp('BaNANA'));