function pressure(str) {
  let result = [];
  let cnt = 1;
  let ix;

  str += ' ';

  for (ix = 0; ix < str.length; ix++) {
    if (str[ix] === str[ix + 1]) {
      cnt++;
    } else {
      result.push(str[ix]);

      if (cnt !== 1) {
        result.push(cnt);
      }
      
      cnt = 1;
    }
  }

  return result.join('');
}

console.log(pressure('KKHSSSSSSSE'));