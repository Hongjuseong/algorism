function toNumber(str) {
  let result;
  let numString = str.replace(/[a-zA-Z]/g, '');
  
  result = parseInt(numString);

  return result;
}

console.log(toNumber('g0en2T0s8eSoft'));


// function s3(inputString) {
//   // 정규식으로 숫자만 남기고, parseInt로 맨앞의 0 문자 제거
//   // console.log(inputString.replace(/[\D]/g, ''));
//   return Number.parseInt(inputString.replace(/[\D]/g, ''));
// }

// console.log(s3('g0en2T0s8eSoft'));