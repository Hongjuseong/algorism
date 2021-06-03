function solution(len, work) {
  const cache = new Array(len[0]).fill(0);

  let result = ''

  for (let i = 0; i < len[1]; i++) {

    if (cache.includes(work[i])) {

      let idx = cache.indexOf(work[i]);

      while (idx) {
        [cache[idx], cache[idx - 1]] = [cache[idx - 1], cache[idx]];
        idx--;
      }

    } else {
      cache.pop();
      cache.unshift(work[i]);
    }

    result = cache.join('');
  }

  return result;
}

console.log(solution([5, 9], [1, 2, 3, 2, 6, 2, 3, 5, 7]));