function solution(arr, target) {
  const asc = arr.sort((a, b) => a - b);
  let start = 0;
  let end = asc.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    if (asc[mid] === target) {
      return mid + 1;
    } else if (asc[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));

// 12, 23, 32, 57, 65, 81, 87, 99

// 시간 복잡도 : O(log(n))
// 이진 탐색은 정렬 된 배열 내에서 대상 값의 위치를 찾는 탐색 알고리즘입니다. 
// 반드시 중복 값이 없고 오름 차순으로 정렬되어 있어야 효율이 있다
// 이진 탐색은 찾는 값을 배열의 중간요소와 비교합니다. 
// 동일하지 않으면 찾는 값이 존재할 수 없는 절반을 제거하고 성공할 떄까지 나머지 절반에서 탐색이 계속 됩니다.