// 자연수 N 입력
// 1부터 N까지의 합 출력

function calculate(target) {
  const start = 1;
  let result;

  result = ((start + target) * target) / 2;

  return result;
}

console.log(calculate(100));

