function solution(rs, as) {
  const asArr = [...as];
  const rsArr = [...rs];
  const rsLen = rsArr.length;

  let cnt = 1;
  let result = 'NO';

  for (let i = 0; i < asArr.length; i++) {
    const subject = asArr[i];

    if (cnt === rsLen) {
      result = 'YES';
      return result;
    }
      
    if (rsArr.indexOf(subject) === 0) {
      rsArr.shift();
      cnt++;
    } else {
      return result;
    }
  }
}

console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CABDGE'));