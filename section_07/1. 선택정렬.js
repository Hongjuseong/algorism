// function solution(num) {

//   for (let i = 0; i < num.length - 1; i++) {

//     for (let j = i + 1; j < num.length; j++) {

//       if (num[i] > num[j]) {
//         const temp = num[i];
//         num[i] = num[j];
//         num[j] = temp;
//       }
//     }
//   }

//   return num;
// }

function solution(arr) {
	let answer = arr; // 얕은 복사

	for (let i = 0; i < arr.length - 1; i++) {

		let idx = i;

		for (let j = i + 1; j < arr.length; j++) {

			if (arr[j] < arr[idx]) {
				idx = j;
			}

		}

		[arr[i], arr[idx]] = [arr[idx], arr[i]];
	}

	return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([2, 6, 1, 7, 23, 15]));

// 선택 정렬
// 1회전을 수행할 때마다 가장 작은 값이 배열의 맨 앞에 오게 된다.
// 정렬할 목록 전체를 반복하며 해당 인덱스의 값이 인접한 값과 스왑이 가능한 경우 스왑한다.
// 더 이상 스왑이 필요하지 않을 때까지 반복된다.

// 시간 복잡도
// 최선의 경우 : O(N^2)
// 최악의 경우 : O(N^2)
// 평균 : O(N^2)
// 장점
// 실행 전 자료의 이동 횟수를 알 수 있다.
// 보조 메모리가 제한도니 경우 복잡한 알고리즘에 비해 성능적인 이점을 낼 수 있다.
// 단점
// 보통의 경우 O(N^2)의 시간 복잡도로 비효율적인 정렬 방식이다.
// 배열 내에 동일한 값이 중복해 있다면 상대적인 위치가 변경될 수 있다.