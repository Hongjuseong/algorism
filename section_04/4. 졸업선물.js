function gift(money, arr) {
  let i;
  const result = [];
  let students = arr.length;

  // 가장 작은 값 제품부터 빼는 오름차순이 없으니 답이 이상하게 나옴
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

  for (i = 0; i < students; i++) {
    let m = money - ((arr[i][0] * 0.5) + arr[i][1]);
    // console.log(m);
    let cnt = 1;

    for (j = 0; j < students; j++) {

      if (i !== j) {

        if (arr[j][0] + arr[j][1] > m) {
          break;
        } else if (arr[j][0] + arr[j][1] <= m) {
          m = m - (arr[j][0] + arr[j][1]);
          // console.log(i, j);
          // console.log(m);
          cnt++;
          // console.log(cnt);
        }

      }

    }

    result.push(cnt);

  }

  return Math.max(...result);

}

console.log(gift(28, [[6, 6],
                      [2, 2],
                      [4, 3],
                      [4, 5],
                      [10, 3]]));