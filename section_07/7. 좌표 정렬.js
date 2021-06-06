function solution(arr) {
  const result = [...arr];

  result.sort((a, b) => {
    if (a[0] === b[0]) {
      // return a[1] < b[1] ? a[1] - b[1] : b[1] - a[1]; //(?)
      return a[1] - b[1];
    }
 
    return a[0] - b[0];
  });

  return result;
}

console.log(solution([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]));

// compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다. (오름차순)
// compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. (내림차순)