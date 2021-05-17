function solution(str) {
  const stack = [];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] !== ')') {
      stack.push(str[i]);

    } else {
      let pop = stack.pop();

      while(pop !== '(') {
        pop = stack.pop();
      }; 
    }
  }

  result = stack.join('');

  return result;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
