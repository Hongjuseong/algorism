function solution(s, t) {
  let str = '';
  let start = 0;
  let count = 0;

  const anagram = {};
  const anagram2 = {};

  for (let i = 0; i < t.length; i++) {

    if (anagram2[t[i]]) {
      anagram2[t[i]]++;
    } else {
      anagram2[t[i]] = 1;
    }
  }

  for (let end = 0; end < s.length; end++) {
      str += s[end];

      if (anagram[s[end]]) {
        anagram[s[end]]++;
      } else {
        anagram[s[end]] = 1;
      }

      if (end >= t.length - 1) {
        let flag = true;

        for (let key in anagram) {

          if (anagram[key] !== anagram2[key]) {
            flag = false;
            break;
          }

        }

        if (flag) count++;

        delete anagram[s[start++]]
        str = str.substring(start);
      }
  }

  return count;
}

console.log(solution('bacaAacba', 'abc'));