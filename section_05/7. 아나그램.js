function solution(arr, arr2) {
  const anagram = {};
  const anagram2 = {};

  for (let i = 0; i < arr.length; i++) {

    if (!anagram[arr[i]]) {
      anagram[arr[i]] = 1;
    } else {
      anagram[arr[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {

    if (!anagram2[arr2[i]]) {
      anagram2[arr2[i]] = 1;
    } else {
      anagram2[arr2[i]]++;
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