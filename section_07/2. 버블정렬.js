function solution(num) {

  for (let i = 0; i < num.length - 1; i++) {

    for (let j = 0; j < num.length - 1; j++) {

      if (num[j] > num[j + 1]) {
        const temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
    }
  }

  return num;

}

console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([2, 6, 1, 7, 23, 15]));

// 버블 정렬
// 인접한 두 원소를 검사하여 정렬하는 알고리즘
// 정렬할 목록 전체를 반복하며 해당 인덱스의 값이 인접한 값과 스왑이 가능한 경우 스왑한다.
// 더 이상 스왑이 필요하지 않을 때까지 반복된다.

// 시간 복잡도
// 최선의 경우 : O(N^2)
// 최악의 경우 : O(N^2)
// 평균 : O(N^2)
// 장점
// 구현이 매우 간단하다.
// 단점
// 최선, 최악의 경우 시간복잡도가 모두 O(N^2)이므로 매우 비효율적이다.