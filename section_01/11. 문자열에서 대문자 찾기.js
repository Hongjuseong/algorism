// 입력된 문자열에서 대문자가 몇 개 있는지 찾기

function capital(str) {
  let count = 0;
  count = str.match(/[A-Z]/g).length;

  return count;
}

console.log(capital('KoreaTimeGood'));