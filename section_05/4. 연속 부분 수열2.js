function concat(arr, num) {
  const aLen = arr.length;
  let result = 0;
  let sum = 0;

  // 2개 포인터
  let point1 = 0;
  let point2 = 0;

  while (point1 < aLen) {

    if (sum < num && point2 !== aLen) {
      sum += arr[point2];

      if (sum <= num) {
        result++;
      }

      point2++;      
      
    } else {
      sum -= arr[point1];
      
      if (sum <= num) {
        result++;
      }

      point1++;
    }
  }

  return result;
}

console.log(concat([1, 3, 1, 2, 3], 5));



