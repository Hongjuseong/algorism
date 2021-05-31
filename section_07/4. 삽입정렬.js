function solution(len, arr) {

  for (let i = 0; i < len; i++) {
    let idx = i;

    while (arr[idx] > arr[idx + 1]) {
      // console.log(arr[idx], arr[idx + 1]);
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      idx--;
    }
  }

  return arr;
}

console.log(solution(6, [11, 7, 5, 6, 10, 9]));
// 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘