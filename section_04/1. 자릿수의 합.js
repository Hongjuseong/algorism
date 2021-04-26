// 각 자연수의 자릿수의 합을 구하고
// 그 합이 최대인 자연수를 출력하는 프로그램

function calc(arr) {
  let i;
  let j;
  let max = 0;    // max 값
  let res = 0;    // max 최신화 되었을때 자연수 값
  let num = 0;    // 각 자연수 값
  let result = 0; // 최종 결과
  
  for (i = 0; i < arr.length; i++) {
    let numString = String(arr[i]);
    let sum = 0;
    num = arr[i];

    // 각 자릿수의 합
    for (j = 0; j < numString.length; j++) {
      sum += parseInt(numString[j]);
    }

    if (max < sum) {
      max = sum;
      res = arr[i];
      result = res;
    } else if (max === sum) {
      result = num < res ? res : num;
    }
  }

  return result;
}

console.log(calc([128, 460, 603, 40, 521, 137, 123]));
