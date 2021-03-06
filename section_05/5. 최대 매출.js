function solution(arr, num){
  let sum = 0;
  let max = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
      sum += arr[end];

      if (end >= num - 1) {
        max = Math.max(max, sum);
        sum -= arr[start++];
      }
  }

  return max;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));


// function solution(k, arr) {
// 	let answer, sum = 0;
// 	for (let i = 0; i < k; i++) {
// 		sum += arr[i];
// 	}
// 	for (let i = k; i < arr.length; i++) {
// 		sum += (arr[i] - arr[i-k]);
// 		answer = Math.max(answer, sum);
// 	}
// 	return answer;
// }