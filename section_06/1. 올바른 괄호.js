function solution(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {

      if (stack.length === 0) {
				return 'NO';
			}

      stack.pop();
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

console.log(solution('(())()'));

// (())()
// (()()))

// function solution(str) {
// 	const arr = [];
// 	for (let c of str) {
// 		if (c === '(') {
// 			arr.push('(');
// 		} else {
// 			if (arr.length === 0) {
// 				return 'NO';
// 			}
// 			arr.pop();
// 		}
// 	}
// 	return arr.length > 0 ? 'NO' : 'YES';
// }

// solution('(()(()))(()');