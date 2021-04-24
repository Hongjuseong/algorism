// 등수 구하기
// 같은 점수가 입력될 경우 높은 등수로 동일 처리

function calculate(base, arr) {
  // let result = [1, 1, 1, 1, 1];
  let result = new Array(arr.length).fill(1);

  let ix;
  let jx;

  for (ix = 0; ix < base; ix++) {
    
    for (jx = 0; jx < base; jx++) {
      
      if (arr[ix] < arr[jx]) {
        result[ix]++;
      }
    }
  }

  return result;
}

console.log(calculate(5, [87, 89, 92, 100, 76]));
console.log(calculate(5, [87, 89, 92, 92, 92]));


// function solution(arr) {
//   let result = [];
//   let sortedArr = [...arr].sort((a, b) => b - a);
//   for (score of arr) {
//       result.push(sortedArr.indexOf(score) + 1);
//   }
//   return result;
// }

