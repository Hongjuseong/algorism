function solution(str, str2) {
  const anagram = {};
  const anagram2 = {};

  for (let i = 0; i < str.length; i++) {

    if (anagram[str[i]]) {
      anagram[str[i]]++;
    } else {
      anagram[str[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {

    if (anagram2[str2[i]]) {
      anagram2[str2[i]]++;
    } else {
      anagram2[str2[i]] = 1;
    }
  }

  const keys = Object.keys(anagram);
  const keys2 = Object.keys(anagram2);

  let result = 'NO'
  let cnt = 0;
  
  if (keys.length === keys2.length) {

    for (let i = 0; i < keys.length; i++) {
      const anagramKey = keys[i];
      
      if (anagram[anagramKey] === anagram2[anagramKey]) {
        cnt++;
      }
      
    }

    result = keys.length === cnt ? 'YES' : 'NO';
  }
  
  return result;
}

console.log(solution('AbaAeCe', 'baeeACA'));