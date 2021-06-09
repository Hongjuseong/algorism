function solution(arr) {
  const guests = [...arr];
  const timeLine = [];

  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < guests.length; i++) {
    const guest = guests[i];

    timeLine.push([guest[0], 1]);
    timeLine.push([guest[1], 2]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  // console.log(timeLine);

  for (let i = 0; i < timeLine.length; i++) {
    const time = timeLine[i];

    if (time[1] === 1) {
      count++;
    } else {
      count--;
    }

    if (count > max) max = count;
  }

  return max;
}

console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));