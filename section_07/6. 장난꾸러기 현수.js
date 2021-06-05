function solution(len, arr) {
  const origin = Array.from(arr);
  const sort = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < len; i++) {

    if (origin[i] !== sort[i]) {
      result.push(i + 1);
    }

  }

  return result;
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(6, [120, 130, 150, 150, 130, 150]));