// const result = [];

function solution(num) {

  if (num === 0) return;
  else {
    solution(num - 1);
    console.log(num);
    // result.push(num);
  }
}

console.log(solution(3));
// console.log(result);