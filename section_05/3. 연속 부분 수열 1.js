function concat(arr, num) {
  const aLen = arr.length;
  let result = 0;
  let sum = 0;
  
  // num은 부분합 값

  // 2개 포인터
  let point1 = 0;
  let point2 = 0;

  while (point1 < aLen) {

    if (sum === num) {
      result++;
    }

    if (point2 === aLen) {
      break;
    }

    if (sum < num) {
      sum += arr[point2];
      point2++;      
    } else {
      sum -= arr[point1];
      point1++;
    }
  }

  return result;
}

console.log(concat([1, 2, 1, 3, 1, 1, 1, 2], 6));