function solution(str) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      const prev = str[i - 1];
      stack.pop();
      // console.log(str[i - 1]);

      if (prev === '(') {
        result += stack.length;
        // stack.pop();
      } else {
        result++;
      }
    }
  }

  return result;
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));