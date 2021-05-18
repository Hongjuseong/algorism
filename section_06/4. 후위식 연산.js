function calculate(first, second, operator) {
  let result = 0;

  switch (operator) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    case '/':
      result = first / second;
      break;
  }

  return result;
}

function solution(numStr) {
  const stack = [];

  for (let i = 0; i < numStr.length; i++) {
    const num = Number(numStr[i]);

    if (isNaN(num)) {
      const secondNum = stack.pop();
      const firstNum = stack.pop();
      const operator = numStr[i];

      stack.push(calculate(firstNum, secondNum, operator));
    } else {
      stack.push(num);
    }
  }

  return stack.join('');
}

// 후위 표기식 연산법
// 탐색하다 첫 연산자를 만나면 앞에 2개의 숫자를 계산
// 이후 동작 반복

console.log(solution('352+*9-'));
