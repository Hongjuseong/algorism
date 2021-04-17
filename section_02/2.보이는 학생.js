// 학생의 수 구하기
// 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 안 보임

function canSee(base, arr) {
  let ix;
  let result = [];
  
  // 최초 앞자리는 무조건 보임
  result.push(arr[0]);

  // 1번 수 다음 부터 시작
  for (ix = 1; ix < base; ix++) {

    if (result[result.length - 1] < arr[ix])
      result.push(arr[ix]);
  }

  return result.length;
}

console.log(canSee(8, [130, 135, 148, 140, 145, 150, 150, 153]));