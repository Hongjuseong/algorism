function solution(len, work) {
  const cache = new Array(len[0]).fill(0);

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

  }

  return cache;
}

console.log(solution([5, 9], [1, 2, 3, 2, 6, 2, 3, 5, 7]));