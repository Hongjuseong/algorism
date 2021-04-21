// 회문 문자열이면 YES, 아니면 NO

function reverse(arr) {
  let result = 'NO';

  let lower = arr.toLowerCase();
  let reverse = lower.split('').reverse().join('');

  if (lower === reverse) {
    result = 'YES';
  }

  return result;
}

console.log(reverse('good'));