function kBig(target, arr) {
  let i, j, k;
  let length = arr.length;
  const result = [];

  for (i = 0; i < length; i++) {

    for (j = i + 1; j < length; j++) {

      for (k = j + 1; k < length; k++) {
        result.push(arr[i] + arr[j] + arr[k]);
      }

    }

  }

  const set = new Set(result);
  const newArr = Array.from(set).sort((a, b) => b - a);

  return newArr[target - 1];
}

console.log(kBig(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));