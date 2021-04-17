// 입력된 소문자 문자열에서 가운데 문자 출력 
// 단어의 길이가 짝수면 가운데 2개 문자 출력
// 단어의 길이가 홀수면 가운데 1개 문자 출력

function middle(str) {
  let odd;
  let result;
  const val = Math.floor(str.length / 2);

  if (str.length % 2 === 1) odd = true;
  else odd = false;

  if (odd) result = str.substr(val, 1);
  else result = str.substr(val - 1, 2);

  return result;
}

console.log(middle('study'));
console.log(middle('good'));
console.log(middle('normal'));
console.log(middle('something'));