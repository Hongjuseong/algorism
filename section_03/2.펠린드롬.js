// 팰린드롬이면 YES, 아니면 NO

function solution(str) {
  let result = 'NO';
  const lower = str.toLowerCase();
  // console.log(lower);
  
  // a-z가 아닌(^) 녀석들 replace
  const newStr = lower.replace(/[^a-z]/g, '');
  const reverse = newStr.split('').reverse().join('');

  if (newStr === reverse) {
    result = 'YES';
  }

  return result;
} 

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));