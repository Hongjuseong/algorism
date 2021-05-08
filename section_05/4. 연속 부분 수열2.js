// function concat(arr, num) {
//   const aLen = arr.length;
//   let result = 0;
//   let sum = 0;

//   // 2개 포인터
//   let point1 = 0;
//   let point2 = 0;

//   // 처음 5개
//   // for (let i = 0; i < aLen; i++) {
//   //   result++;
//   // }

//   while (point1 < aLen) {

//     if (sum < num && point2 !== aLen) {
//       sum += arr[point2];

//       if (sum <= num) {
//         result++;
//       }

//       point2++;      
      
//     } else {
//       sum -= arr[point1];
      
//       if (sum <= num) {
//         result++;
//       }

//       // point2가 aLen인 시점부터는 빼줌
//       // if (point2 === aLen) {
//       //   result--;
//       // }

//       point1++;
//     }
//   }

//   return result;
// }

function solution(arr, m){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      while(sum>m){
          sum-=arr[lt++];
      }
      answer+=(rt-lt+1);
  }               
  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));



