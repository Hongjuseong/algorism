function solution(arr) {
  const conf = [...arr];
  let result = 0;
  let currEnd = Number.MIN_SAFE_INTEGER;

  conf.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  for (let i = 0; i < conf.length; i++) {
    const [confStart, confEnd] = conf[i];
    // console.log(confStart);
    // console.log(confEnd);

    if (confStart >= currEnd) {
      currEnd = confEnd;
      result++;
    }

  }

  return result;
}

// console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]));
console.log(solution([[3, 3], [1, 3], [2, 3]]));