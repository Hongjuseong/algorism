function concat(arr, arr2) {
  const result = [];
  const aLen = arr.length;
  const bLen = arr2.length;

  // 2개 포인터
  let point1 = 0;
  let point2 = 0;  

  arr.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // console.log(arr);
  // console.log(arr2);

  while (point1 < aLen && point2 < bLen) {
    // console.log(arr[point1]);
    // console.log(arr2[point2]);

    if (arr[point1] === arr2[point2]) {
      result.push(arr[point1]);
      point1++;
      point2++;
    } else if (arr[point1] < arr2[point2]) {
      point1++;
    } else {
      point2++;
    }
  }

  return result;
}

console.log(concat([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));