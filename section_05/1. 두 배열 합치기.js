// function concat(arr, arr2) {
//   const result = [...arr, ...arr2];

//   return result.sort((a, b) => a - b);
// }

// console.log(concat([1, 3, 5], [2, 3, 6, 7, 9]));

function concat(arr, arr2) {
  const result = [];
  const aLen = arr.length;
  const bLen = arr2.length;

  // 2개 포인터
  let point1 = 0;
  let point2 = 0;

  // for 문을 쓸 수는 없을 것 같다. for 문은 모든 경우의 수를 다 탐색 1 -> 2, 3, 6, 7, 9 / 3 -> 2, 3, 6, 7, 9

  while (point1 < aLen && point2 < bLen) {

    if (arr[point1] <= arr2[point2]) {
      result.push(arr[point1]);
      point1++;
    } else {
      result.push(arr2[point2]);
      point2++;
    }
  }

  // 2번째 배열 나머지 값 처리
  while (point2 < bLen) {
    result.push(arr2[point2]);
    point2++;
  }

  return result;
}

console.log(concat([1, 3, 5], [2, 3, 6, 7, 9]));


// 포인터 2개를 준비합니다. (lo, hi), (l, r), (p, q), (s, e) 등등 명칭은 자유인데 저는 s, e로 하죠.
// 맨 처음에는 s = e = 0이며, 항상 s <= e여야 합니다.
// 이 포인터는 현재 부분 배열의 시작과 끝을 가리키는 역할입니다.
// 저는 s가 가리키는 칸은 포함되고, e가 가리키는 칸은 포함되지 않도록 기준을 잡겠습니다.
// s = e일 경우 그건 크기가 0인, 아무것도 포함하지 않는 부분 배열을 뜻합니다.
// 이제 다음의 과정을 s < N인 동안 반복합니다.

// 1. 만약 현재 부분합이 M 이상이거나, 이미 e = N이면 s++
// 2. 그렇지 않다면 e++
// 3. 현재 부분합이 M과 같으면 결과 ++

// 말하자면 s, e를 무조건 증가시키는 방향으로만 변화시켜 가면서, 도중에 [s, e) 부분 배열의 합이 정확히 M이 되는 횟수를 세는 겁니다.