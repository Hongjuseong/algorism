const result = [];

function solution(num) {

  if (num === 0) return;
  else {
    solution(num - 1);
    result.push(num);
  }

  return result;
}

console.log(solution(3));