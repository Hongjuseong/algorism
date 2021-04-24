// 회문 문자열이면 YES, 아니면 NO

function reverse(str) {
  let result = 'NO';

  let lower = str.toLowerCase();
  let reverse = lower.split('').reverse().join('');

  if (lower === reverse) {
    result = 'YES';
  }

  return result;
}

console.log(reverse('gooG'));