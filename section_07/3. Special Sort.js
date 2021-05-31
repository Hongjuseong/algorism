// function solution(num, arr) {
//   const minus = [];
//   const plus = [];

//   for (let i = 0; i < num; i++) {

//     if (arr[i] < 0) {
//       minus.push(arr[i]);
//     } else {
//       plus.push(arr[i]);
//     }

//   }

//   return [...minus, ...plus];
// }

function solution(num, arr) {
  
  for (let i = 0; i < num - 1; i++) {

    for (let j = 0; j < num - i - 1; j++) {

      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));