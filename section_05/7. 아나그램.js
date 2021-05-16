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
      const key = keys[i];
      
      if (anagram[key] === anagram2[key]) {
        cnt++;
      }
      
    }

    result = keys.length === cnt ? 'YES' : 'NO';
  }
  
  return result;
}

console.log(solution('AbaAeCe', 'baeeACA'));


// function solution(str1, str2) {
// 	let answer = 'YES';
// 	let sh = new Map();
// 	for (let x of str1) {
// 		if (sh.has(x)) {
// 			sh.set(x, sh.get(x) + 1);
// 		} else {
// 			sh.set(x, 1);
// 		}
// 	}
// 	for (let x of str2) {
// 		if (!sh.has(x) || sh.get(x) === 0) {
// 			return 'NO';
// 		}
// 		sh.set(x, sh.get(x) - 1);
// 	}
// 	return answer;
// }

// console.log(solution('AbaAeCe', 'baeeACA'));