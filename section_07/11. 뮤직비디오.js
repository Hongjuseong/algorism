function solution(arr, cnt) {
  const max = arr.reduce((prev, curr) => prev + curr);
  const min = max / cnt;

  let end = max;
  let start = min;
  let result = Number.MIN_SAFE_INTEGER;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (musicCount(arr, mid) <= cnt) {
      end = mid - 1;
      // console.log(end);
    } else {
      start = mid + 1;
    }

    result = mid;
  }

  return result;
}

function musicCount(songs, time) {
  // console.log('11');
  // console.log(time);
  let dvdCount = 1;
  let timeSum = 0;

  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];

    if (timeSum + song > time) {
      dvdCount++;
      timeSum = song;
    } else {
      timeSum += song;
    }
  }
  // console.log(dvdCount);

  return dvdCount;
}

// 15 45 30
// 15 29 22
// 15 21 18
// 15 17 16
// 17 17 17

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));