// // function concat(arr, arr2) {
// //   const result = [...arr, ...arr2];

// //   return result.sort((a, b) => a - b);
// // }

// // console.log(concat([1, 3, 5], [2, 3, 6, 7, 9]));

function concat(arr, arr2) {
  const result = [];
  const aLen = arr.length;
  const bLen = arr2.length;

  // 2개 포인터
  let point1 = 0;
  let point2 = 0;

  // for 문을 쓸 수는 없을 것 같다. for 문은 모든 경우의 수를 다 탐색 1 -> 2, 3, 6, 7, 9 / 3 -> 2, 3, 6, 7, 9

  while (point1 < aLen && point2 < bLen) {

    if (arr[point1] <= arr2[point2]) {
      result.push(arr[point1]);
      point1++;
    } else {
      result.push(arr2[point2]);
      point2++;
    }
  }

  // 1번째 배열 나머지 값 처리
  while (point1 < aLen) {
		result.push(arr[point1]);
		point1++;
	}

  // 2번째 배열 나머지 값 처리
  while (point2 < bLen) {
    result.push(arr2[point2]);
    point2++;
  }

  return result;
}

console.log(concat([1, 3, 5], [2, 3, 6, 7, 9]));

// function concat(arr1, arr2) {
// 	const answer = [];
// 	let left = 0;
// 	let right = 0;
// 	while (left < arr1.length && right < arr2.length) {
// 		if (arr1[left] < arr2[right]) {
// 			answer.push(arr1[left]);
// 			left++;
// 		} else if (arr1[left] > arr2[right]) {
// 			answer.push(arr2[right]);
// 			right++;
// 		} else {
// 			answer.push(arr1[left]);
// 			answer.push(arr2[right]);
// 			left++;
// 			right++;
// 		}
// 	}
// 	while (left < arr1.length) {
// 		answer.push(arr1[left]);
// 		left++;
// 	}
// 	while (right < arr2.length) {
// 		answer.push(arr2[right]);
// 		right++;
// 	}

// 	return answer;
// }