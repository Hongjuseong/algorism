function solution(arr, cnt) {
  const stables = arr.sort((a, b) => a - b);

  let end = stables[stables.length - 1];
  let start = stables[0];
  let result = Number.MIN_SAFE_INTEGER;
  
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    // console.log(`mid = ${mid}`);

    if (horseCount(stables, mid) < cnt) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    // console.log(`end = ${end}`);
    // console.log(`start = ${start}`);

    result = start;
  }

  return result;
}

function horseCount(stables, mid) {
  let horseCount = 1; // 무조건 1번 좌표 한 마리
  let lastStable = stables[0];

  for (let i = 1; i < stables.length; i++) {
    const stable = stables[i];

    if (stable - lastStable > mid) {
      horseCount++;
      lastStable = stable;
      // console.log(`horseCount = ${horseCount}`);
      // console.log(`lastStable = ${lastStable}`);
    } 
  }

  return horseCount;
}

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 7, 8, 9], 3));
console.log(solution([1, 14, 9, 16, 100], 4));