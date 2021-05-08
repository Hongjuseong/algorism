// function concat(arr, num) {
//   const aLen = arr.length;
//   let result = 0;
//   let sum = 0;
  
//   // num은 부분합 값

//   // 2개 포인터
//   let point1 = 0;
//   let point2 = 0;

//   while (point1 < aLen) {

//     if (point2 === aLen) {
//       break;
//     }

//     if (sum < num) {
//       sum += arr[point2];
//       point2++;      
//     } else {
//       sum -= arr[point1];
//       point1++;
//     }

//     if (sum === num) {
//       result++;
//     }
//   }

//   return result;
// }

function solution(arr, m) {
	let answer = 0;
	let lt = 0;
	let sum = 0;
	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		if (sum === m) {
			answer++;
		}
		while (sum >= m) {
			sum -= arr[lt++];
			if (sum === m) {
				answer++;
			}
		}
	}
	return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));