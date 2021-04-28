function mentor(arr) {
  let i, j, k, l, result = 0;
  let students = arr[0].length;
  let tests = arr.length;

  // 순위 0 < 1 < 2 < 3 
  // 학생 값은 1, 2, 3, 4

  // 기준 학생
  for (k = 1; k <= students; k++) {

    // 비교 학생
    for (l = 1; l <= students; l++) {
    
      // 시험별 순위가 몇개나 앞 서는지
      let count = 0;

      // 시험
      for (i = 0; i < tests; i++) {

        // 학생의 순위값
        let kIndex = 0;
        let lIndex = 0;

        // 시험별 순위
        for (j = 0; j < students; j++) {
          
          // 기준 학생의 순위
          if (arr[i][j] === k) {
            kIndex = j;
          }

          // 비교 학생의 순위
          if (arr[i][j] === l) {
            lIndex = j;
          }

        }

        if (kIndex < lIndex) {
          count++;
        }

      }

      if (count === tests) {
        result++;
      }

      // console.log('k = ' + k);
      // console.log('l = ' + l);
      // console.log(count);
      // console.log(result);

    }

  }

  return result;

}

console.log(mentor([[3, 4, 1, 2],
                    [4, 3, 2, 1],
                    [3, 1, 4, 2]]))