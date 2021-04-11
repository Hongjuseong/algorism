// 대문자로 이루어진 영어단어가 입력되면 'A'를 모두 '#'으로 변환
// 문제는 대문자 A인데 i를 쓰면 소문자도 바뀌어서 틀린 답이었음

function AtoSharp(str) {
  let result;

  result = str.replace(/A/g, '#');

  return result;
}

console.log(AtoSharp('BaNANA'));