const result = [];

function solution(num) {
  
  if (num === 0) return;
  else {
    solution(parseInt(num / 2)); // 몫
    result.push(num % 2); // 나머지
  }

  return result;
}

console.log(solution(11));

// const decNum = 127; // 자바스크립트의 숫자는 기본적으로 10진수
// const binNum = decNum.toString(2);  // 2진수로 변환, 1111111
// const octNum = decNum.toString(8);  // 8진수로 변환, 177
// const hexNum = decNum.toString(16); // 16진수로 변환, 7f

// console.log(decNum);
// console.log(binNum);
// console.log(octNum);
// console.log(hexNum);