// function solution(s, t) {
//   let str = '';
//   let start = 0;
//   let count = 0;

//   const anagram = {};
//   const anagram2 = {};

//   for (let i = 0; i < t.length; i++) {

//     if (anagram2[t[i]]) {
//       anagram2[t[i]]++;
//     } else {
//       anagram2[t[i]] = 1;
//     }
//   }

//   for (let end = 0; end < s.length; end++) {
//       str += s[end];

//       if (anagram[s[end]]) {
//         anagram[s[end]]++;
//       } else {
//         anagram[s[end]] = 1;
//       }

//       if (end >= t.length - 1) {
//         let flag = true;

//         const keys = Object.keys(anagram);

//         for (let i = 0; i < keys.length; i++) {
//           const key = keys[i];

//           if (anagram[key] > 0 && anagram[key] !== anagram2[key]) {
//             flag = false;
//             break;
//           }
//         }

//         if (flag) count++;

//         if (anagram[s[start]]) {
//           anagram[s[start++]]--;
//         }

//         str = str.substring(t.length - 2);
//       }
//   }

//   return count;
// }

// console.log(solution('bacaAacba', 'abc'));

function compareMaps(map1, map2) {
	if (map1.size !== map2.size) return false;
	for (let [key, val] of map1) {
		if (!map2.has(key) || map2.get(key) !== val) return false;
	}
	return true;
}

function solution(s, t) {
	let answer = 0;
	let th = new Map();
	let sh = new Map();

	// th에 값 세팅
	for (let x of t) {
		if (th.has(x)) th.set(x, th.get(x) + 1);
		else th.set(x, 1);
	}

	// len -1 개수만큼 sh에 값 세팅
	let len = t.length - 1;
	for (let i = 0; i < len; i++) {
		if (sh.has(s[i])) {
			sh.set(s[i], sh.get(s[i]) + 1);
		} else {
			sh.set(s[i], 1);
		}
	}
	
	let lt = 0;
	for (let rt = len; rt < s.length; rt++) {
		// t개수만큼 값 세팅
		if (sh.has(s[rt])) {
			sh.set(s[rt], sh.get(s[rt]) + 1);
		} else {
			sh.set(s[rt], 1);
		}

		// 이때 th와 sh를 비교
		if (compareMaps(sh, th)) {
			answer++;
		}
		// lt의 값 빼줌
		sh.set(s[lt], sh.get(s[lt]) - 1);
		// sh의 map의 value가 0인 경우 삭제
		if (sh.get(s[lt]) === 0) {
			sh.delete(s[lt]);
		}
		// lt의 값을 빼준 뒤에 lt를 증감
		lt++;
	}
	return answer;
}

solution('bacaAacba', 'abc'); // 3