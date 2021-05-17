function solution(str) {
  let result = 'YES';
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {

      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } 
    }
  }

  console.log(stack);

  if (stack.length > 0) result = 'NO';

  return result;
}

console.log(solution('(())()'));

// (())()
// (()()))